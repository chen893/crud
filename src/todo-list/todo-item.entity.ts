import { Entity, Column, ObjectIdColumn } from 'typeorm';
@Entity()
export class TodoItem {
  @ObjectIdColumn() //文档是用 @PrimaryGeneratedColumn()装饰器的,也是从typeorm 中导入，但是我用mongodb储存数据会报错，所以我改用了 @ObjectIdColumn()这个装饰器。
  id: number;

  @Column()
  name: string;

  @Column()
  status: boolean;
}
