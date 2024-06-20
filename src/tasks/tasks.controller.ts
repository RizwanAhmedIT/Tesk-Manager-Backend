import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Post()
    create(@Body() CreateTaskDto: CreateTaskDto){
        return this.tasksService.createTask(CreateTaskDto);
    }

    @Get()
    findall(){
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
