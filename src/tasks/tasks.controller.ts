import { Body, Controller, Delete, Get, Logger, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

let i =0 ;


@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Post()
    create(@Body() CreateTaskDto: CreateTaskDto){
        return this.tasksService.createTask(CreateTaskDto);
    }

    @Get()

    findall(){
        Logger.log(" API hite "+i++);
        return this.tasksService.findall();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.tasksService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdateTaskDto: CreateTaskDto){
        return this.tasksService.update(id, UpdateTaskDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.tasksService.remove(id);
    }
}
