import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { NestFactory } from '@nestjs/core';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://shaikhrizwanahmed13:It3QS0g31vBmxzoG@tesk-manager.xtmuoqe.mongodb.net/?retryWrites=true&w=majority&appName=tesk-manager'), // Adjust the connection string as needed
    TasksModule,
  ],
})
export class AppModule {}
