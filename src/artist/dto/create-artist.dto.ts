import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateArtistDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  grammy: boolean;
}