import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Headers,
  Delete,
  InternalServerErrorException,
  ForbiddenException,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { SignInUserDto } from './dto/sign-in-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { AuthGuard } from './auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async register(@Body() registerUserDto: RegisterUserDto) {
    try {
      const user = await this.usersService.register(registerUserDto);

      return user;
    } catch (e: any) {
      console.error('Error during user registration:', e);

      if ((e as { code: string }).code === 'ER_DUP_ENTRY') {
        throw new ForbiddenException(
          'Пользователь с данным именем уже существует',
        );
      } else {
        throw new InternalServerErrorException('Что-то пошло не так');
      }
    }
  }

  @Post('sessions')
  signIn(@Body() signInUserDto: SignInUserDto) {
    return this.usersService.signIn(signInUserDto);
  }

  @Delete('logout')
  @UseGuards(AuthGuard)
  async logout(@Headers() headers: { authorization: string }) {
    if (!headers.authorization) {
      return;
    }


    const user = await this.usersService.getUserByToken(headers.authorization);

    if (!user) {
      throw new ForbiddenException();
    }

    await this.usersService.saveNewTokenedUser(user);
    return { message: 'Logged out successfully' };
  }
}
