import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common'
import { LocalAuthGuard } from './local-auth.guard'
import { AuthService } from './auth.service'
import { Prisma } from '.prisma/client'
import { JwtRefreshGuard } from 'src/jwt-refresh/jwt-refresh.guard'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req, @Response({passthrough: true}) res) {
    console.log('Controller Layer Login')
    console.log(req.user)
    return this.authService.login(req.user, res)
  }

  @Post('register')
  register(@Body() user: Prisma.UserCreateInput) {
    console.log('Controller Layer Register')
    return this.authService.register(user)
  }

  @UseGuards(JwtRefreshGuard)
  @Get('refresh')
  refreshAccessToken(@Request() req) {
    console.log("REFRESH ENDPOINT")
    console.log(req.user)
    return this.authService.refreshAccessToken(req.user)
  }
}
