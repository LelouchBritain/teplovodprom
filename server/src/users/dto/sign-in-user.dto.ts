import { Expose } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { Role } from 'src/role/enums/role.enum';

export class SignInUserDto {
  @Expose()
  @IsNotEmpty({ message: 'Укажите имя' })
  @IsString({ message: 'Имя должно быть строкой' })
  @Matches(/^[A-Za-z]+$/, {
    message: 'Имя должно содержать только латинские буквы',
  })
  username!: string;

  @Expose()
  @IsString({ message: 'Пароль должен быть строкой' })
  @IsNotEmpty({ message: 'Укажите пароль' })
  password: string;
}
