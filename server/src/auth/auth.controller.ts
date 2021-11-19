import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { Prisma } from '.prisma/client';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}
  
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    console.log("Controller Layer Login")
    console.log(req.user)
    return this.authService.login(req.user)
  }

  @Post('register')
  register(@Body() user: Prisma.UserCreateInput) {
    console.log("Controller Layer Register")
    return this.authService.register(user)
  }
}
