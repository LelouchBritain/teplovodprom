import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Role } from '../../role/enums/role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  token?: string;

  generateToken() {
    this.token = crypto.randomUUID();
  }
}
