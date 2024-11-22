import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'

export class CreateUserDto {

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(5)
  @MaxLength(50)
  password: string;
}