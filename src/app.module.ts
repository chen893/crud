import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoListModule } from './todo-list/todo-list.module';
import { TodoItem } from './todo-list/todo-item.entity';
@Module({
  imports: [
    TodoListModule,
    TypeOrmModule.forRoot({
      type: 'mongodb', //我用的是mongodb ，可选其他TypeORM 支持的数据库，安装好依赖
      host: 'localhost',
      port: 27017, //数据库端口号,mongodb默认27017
      //username: 'root',    因为mongodb 的连接不用 账号密码， 所以我这边注释了，如果你的数据库要密码的话，要写上去。
      //password: 'root',
      database: 'nest', //
      entities: [TodoItem],
      synchronize: true,
      logging: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
