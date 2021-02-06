import { Test, TestingModule } from '@nestjs/testing';
import { TodoListController } from './todo-list.controller';

describe('TodoListController', () => {
  let controller: TodoListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoListController],
    }).compile();

    controller = module.get<TodoListController>(TodoListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
