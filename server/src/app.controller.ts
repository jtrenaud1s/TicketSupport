import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './jwt-access/jwt-access.guard';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/hello')
  getHello() {
    return this.appService.getHello();
  }
}
