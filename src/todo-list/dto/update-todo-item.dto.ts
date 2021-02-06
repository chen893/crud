import { IsString, IsBoolean } from 'class-validator';
export class UpdateTodoItemDto {
  @IsString()
  readonly id: string;
  @IsString()
  readonly name: string;
  @IsBoolean()
  readonly status: boolean;
}
