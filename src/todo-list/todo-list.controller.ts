import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Query,
  Param,
  Put,
} from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { UpdateTodoItemDto } from './dto/update-todo-item.dto';
import { AddTodoItemDto } from './dto/add-todo-item.dto';
@Controller('todo-list') // 将会匹配 http://localhost:3000/todo-list的请求
export class TodoListController {
  constructor(private todoListService: TodoListService) {}

  @Get()
  /*示例 使用postman 发起 Get 请求 http://localhost:3000/todo-list
   */
  async findAll() {
    const data = await this.todoListService.findAll();
    return {
      success: true,
      message: 'OK',
      data,
    };
  }
  @Get('/find')
  /*示例 使用postman 发起 Get 请求 http://localhost:3000/todo-list/find?name=addTodo2
   */
  async findByName(@Query('name') name: string) {
    const data = await this.todoListService.findByName(name);
    return {
      success: true,
      message: 'OK',
      data,
    };
  }

  @Post()
  /*示例 使用postman 发起 Post 请求 http://localhost:3000/todo-list 在 Body 中选中 raw
  添加数据 {"name": "todoItem", "status": false }
  */
  async addTodoItem(@Body() bodyData: AddTodoItemDto) {
    const data = await this.todoListService.addTodoItem(bodyData);
    return {
      success: true,
      message: 'OK',
      data,
    };
  }

  @Put()
  /*示例 使用postman 发起 Put 请求 http://localhost:3000/todo-list 在 Body 中选中 raw
  添加数据 {"name": "todoItem", "status": true ,"id": "6038f455a502b7283c3a0921"}
  */
  async updateTodoItem(@Body() changeData: UpdateTodoItemDto) {
    const data = await this.todoListService.updateTodoItem(changeData.id, {
      name: changeData.name,
      status: changeData.status,
    });
    return {
      success: true,
      message: 'OK',
      data,
    };
  }
  @Delete(':id')
  //示例 使用postman 发起Delete请求  http://localhost:3000/todo-list/6038f455a502b7283c3a0921
  //6038f455a502b7283c3a0921 这个是一个你打算删除数据的 id。
  async DeleteToDoItem(@Param('id') id: string) {
    const data = await this.todoListService.remove(id);
    return {
      success: true,
      message: 'OK',
      data,
    };
  }
}
