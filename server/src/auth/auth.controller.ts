import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { Prisma } from '.prisma/client';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}
  
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user)
  }

  @Post('register')
  register(user: Prisma.UserCreateInput): any {
    return this.authService.register(user)
  }
}
