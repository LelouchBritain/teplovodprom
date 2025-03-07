// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { ROLE_KEY } from 'src/decorators/roles.decorator';
// import { Role } from 'src/role/enums/role.enum';
// import { UsersService } from 'src/users/users.service';

// @Injectable()
// export class RolesGuard implements CanActivate {
//   constructor(
//     private reflector: Reflector,
//     private usersService: UsersService,
//   ) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLE_KEY, [
//       context.getHandler(),
//       context.getClass(),
//     ]);

//     const request = context.switchToHttp().getRequest();
   
    
//     const token = request?.headers?.authorization;
//     const user = await this.usersService.getUserByToken(token);


//     if (!user) {
//       console.log('User not found for token:', token);
//       return false;
//     }
//     return requiredRoles.some((role) => user.role === role);
//   }
// }
