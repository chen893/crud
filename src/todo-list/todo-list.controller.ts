import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Query,
  Param,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { UpdateTodoItemDto } from './dto/update-todo-item.dto';
import { AddTodoItemDto } from './dto/add-todo-item.dto';

@Controller('todo-list') // 将会匹配 http://localhost:3000/todo-list的请求
export class TodoListController {
  constructor(private todoListService: TodoListService) {}

  @Get()
  async findAll() {
    const data = await this.todoListService.findAll();
    return {
      success: true,
      message: 'OK',
      data,
    };
  }
  @Get('/find')
  async findByName(@Query('name') name: string) {
    const data = await this.todoListService.findByName(name);
    return {
      success: true,
      message: 'OK',
      data,
    };
  }
  @Post()
  @UsePipes(ValidationPipe)
  async addTodoItem(@Body() bodyData: AddTodoItemDto) {
    const data = await this.todoListService.addTodoItem(bodyData);
    return {
      success: true,
      message: 'OK',
      data,
    };
  }

  @Put()
  @UsePipes(ValidationPipe)
  async updateTodoItem(@Body() changeData: UpdateTodoItemDto) {
    return this.todoListService.updateTodoItem(changeData.id, {
      name: changeData.name,
      status: changeData.status,
    });
  }
  @Delete(':id')
  async DeleteToDoItem(@Param('id') id: string) {
    const data = await this.todoListService.remove(id);
    return {
      success: true,
      message: 'OK',
      data,
    };
  }
}
