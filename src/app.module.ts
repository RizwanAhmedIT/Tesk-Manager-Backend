import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://shaikhrizwanahmed13:It3QS0g31vBmxzoG@tesk-manager.xtmuoqe.mongodb.net/?retryWrites=true&w=majority&appName=tesk-manager'), // Adjust the connection string as needed
    TasksModule,
  ],
})
export class AppModule {}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    transform: true,  // Automatically transform incoming data to DTO objects
    whitelist: true,  // Strip out non-whitelisted properties from DTOs
    forbidNonWhitelisted: true,  // Throw an error if non-whitelisted properties are present
  }));
  
  await app.listen(3000);
}
bootstrap();

