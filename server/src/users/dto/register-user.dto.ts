import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class RegisterUserDto {
  @Expose()
  @IsNotEmpty({ message: 'Укажите имя' })
  @IsString({ message: 'Имя должно быть строкой' })
  @Matches(/^[A-Za-z]+$/, {
    message: 'Имя должно содержать только латинские буквы',
  })
  username!: string;

  @Expose()
  @IsNotEmpty({ message: 'Укажите пароль' })
  @IsString({ message: 'Пароль должен быть строкой' })
  password!: string;
}
