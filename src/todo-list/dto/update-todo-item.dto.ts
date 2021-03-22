import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean } from 'class-validator';
export class UpdateTodoItemDto {
  @ApiProperty({
    description: '准备更新任务的id值',
  })
  @IsString()
  readonly id: string;

  @ApiProperty({
    description: '更新后的任务名称',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: '更新后的任务状态',
  })
  @IsBoolean()
  readonly status: boolean;
}
