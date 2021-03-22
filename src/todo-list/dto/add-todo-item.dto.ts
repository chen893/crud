import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean } from 'class-validator';
export class AddTodoItemDto {
  @ApiProperty({
    description: '新添加任务的名称',
  })
  @IsString()
  readonly name: string;
  @ApiProperty({
    description: '新添加任务的状态',
  })
  @IsBoolean()
  readonly status: boolean;
}
