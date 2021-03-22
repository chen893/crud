import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoItem } from './todo-item.entity';
import { Item } from './interfaces/item.interface';
@Injectable()
export class TodoListService {
  constructor(
    @InjectRepository(TodoItem)
    private todoRepository: Repository<TodoItem>,
  ) {}

  async findAll(): Promise<TodoItem[]> {
    return this.todoRepository.find();
  }
  async addTodoItem(item: Item): Promise<TodoItem> {
    return this.todoRepository.save(item);
  }
  async findByName(name: string): Promise<TodoItem[]> {
    return this.todoRepository.find({ name });
  }

  async remove(id: string): Promise<void> {
    await this.todoRepository.delete(id);
    return null;
  }
  async updateTodoItem(id: string, updateData: Item): Promise<void> {
    await this.todoRepository.update(id, updateData);
    return null;
  }
  async deleteAll() {
    const user = await this.todoRepository.find();
    await this.todoRepository.remove(user);
    return [];
  }
}
