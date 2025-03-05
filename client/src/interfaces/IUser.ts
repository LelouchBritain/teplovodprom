export interface IUser {
  id: string;
  name: string;
  surname: string;
  phoneNum: string;
  IIN: string;
  password?: string;
  email: string;
  photo?: string;
  role: Role;
  token?: string;
}

export enum Role {
  User = 'user',
  Admin = 'admin',
  Tech = 'tech_support'
}