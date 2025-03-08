import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { SignInUserDto } from './dto/sign-in-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  private saltRounds = 5;

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async register(registerUserDto: RegisterUserDto) {
    const salt = await bcrypt.genSalt(this.saltRounds);
    registerUserDto.password = await bcrypt.hash(
      registerUserDto.password,
      salt,
    );

    await this.usersRepository.save(registerUserDto);

    const user = await this.usersRepository.findOne({
      where: { username: registerUserDto.username },
    });

    user.generateToken();

    const userWithToken = await this.usersRepository.save(user);
    const userWithoutPassword = _.omit(userWithToken, 'password');
    return userWithoutPassword;
  }

  async signIn(signInUserDto: SignInUserDto) {
    const user = await this.usersRepository.findOne({
      where: { username: signInUserDto.username },
    });

    if (!user) {
      throw new NotFoundException('Invalid username or password');
    }

    const isMatchPassword = await bcrypt.compare(
      signInUserDto.password,
      user.password,
    );

    if (!isMatchPassword) {
      throw new NotFoundException('Invalid username or password');
    }

    user.generateToken();
    const userWithToken = await this.usersRepository.save(user);

    return _.omit(userWithToken, ['password']);
  }

  async getUserByToken(token: string) {
    const user = await this.usersRepository.findOne({ where: { token } });

    if (!user) {
      throw new UnauthorizedException('Неверный токен');
    }

    return user;
  }
  
  async saveNewTokenedUser(user: User): Promise<User> {
    user.generateToken();
    return this.usersRepository.save(user);
  }
}
