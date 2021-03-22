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
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
@Controller('todolist') // 将会匹配 http://localhost:3000/todo-list的请求
export class TodoListController {
  constructor(private todoListService: TodoListService) {}
  @ApiTags('todolist')
  @Get()
  /*示例 使用postman 发起 Get 请求 http://localhost:3000/todo-list
   */
  @ApiOperation({ summary: '查找已保存的信息' })
  async findAll() {
    const data = await this.todoListService.findAll();
    return {
      success: true,
      message: 'OK',
      data,
    };
  }

  @ApiTags('todolist')
  @ApiOperation({ summary: '搜索信息' })
  @ApiQuery({
    name: 'name',
    description: '输入任务名，用于搜索已经保存的任务',
  })
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

  @ApiOperation({ summary: '添加信息' })
  @ApiTags('todolist')
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

  @ApiTags('todolist')
  @ApiBody({ type: UpdateTodoItemDto })
  @ApiOperation({ summary: '更新单个信息' })
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

  @ApiParam({
    name: 'id',
    description: '输入任务id，会进行删除',
  })
  @ApiOperation({ summary: '删除单个信息' })
  @ApiTags('todolist')
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

  @ApiOperation({ summary: '删除所有信息' })
  @ApiTags('todolist')
  @Delete()
  async DeleteAll() {
    const data = await this.todoListService.deleteAll();
    return {
      success: true,
      message: 'OK',
      data,
    };
  }
}
