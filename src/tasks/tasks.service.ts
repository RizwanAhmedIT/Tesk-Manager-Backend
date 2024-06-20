import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './schemas/tesk.schema';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>){}

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        const createdTask = new this.taskModel(createTaskDto);
        return createdTask.save();
    }

    async findall(): Promise<Task[]>{
        return this.taskModel.find().exec();
    }

    // async findone(id: string): Promise<Task[]>{
    //     return this.taskModel.findById(id).exec();
    // }
    async findOne(id: string): Promise<Task> {
        return this.taskModel.findById(id).exec();
    }

    async update(id: string, updateTaskDto: CreateTaskDto): Promise<Task>{
        return this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true}).exec();
    }

    async remove(id: string): Promise<any> {
        return this.taskModel.findByIdAndDelete(id).exec();
    }

    //remove by id 
    // async remove(id: string): Promise<any> {
    //     return this.taskModel.findByIdAndRemove(id).exec();
    // }
    

}
