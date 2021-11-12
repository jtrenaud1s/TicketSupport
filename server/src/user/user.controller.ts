import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne({ id: +id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.userService.update({
      where: { id: +id },
      data: updateUserDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove({ id: +id });
  }

  @Get('search/:searchString')
  async search(
    @Param('searchString') searchString: string,
  ): Promise<User[]> {
    return this.userService.findMany({
      where: {
        OR: [
          {
            firstName: { contains: searchString },
          },
          {
            lastName: { contains: searchString },
          },
          {
            email: { contains: searchString },
          }
        ],
      },
    });
  }
}
