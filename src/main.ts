import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3001',  // Specify your client's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,  // if you need to handle cookies
  };
  app.enableCors(corsOptions);

    // Enable global validation pipe
    app.useGlobalPipes(new ValidationPipe({
      transform: true,  // Automatically transform incoming data to DTO objects
      whitelist: true,  // Strip out non-whitelisted properties from DTOs
      // forbidNonWhitelisted: true,  // Throw an error if non-whitelisted properties are present
    }));
    
  
  await app.listen(30001);
}
bootstrap();