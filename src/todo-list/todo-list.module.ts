import { Module } from '@nestjs/common';
import { TodoListController } from './todo-list.controller';
import { TodoListService } from './todo-list.service';
import { TodoItem } from './todo-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TodoItem])],
  controllers: [TodoListController],
  providers: [TodoListService],
})
export class TodoListModule {}
