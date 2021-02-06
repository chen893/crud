import { IsString, IsBoolean } from 'class-validator';
export class AddTodoItemDto {
  @IsString()
  readonly name: string;
  @IsBoolean()
  readonly status: boolean;
}
