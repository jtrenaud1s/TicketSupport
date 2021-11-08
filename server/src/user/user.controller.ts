import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel, Prisma } from '@prisma/client';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  async signupUser(
    @Body() userData: { username: string; email: string, password: string, department: Prisma.DepartmentCreateNestedOneWithoutUsersInput },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
