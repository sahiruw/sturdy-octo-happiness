import { IsString, IsOptional } from 'class-validator';

export class CreateMenuDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  parentId?: string;
}

export class UpdateMenuDto {
  @IsString()
  @IsOptional()
  name?: string;
}
