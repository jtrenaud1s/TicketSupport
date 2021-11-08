import {
  Controller,
  Param,
  Post,
  Body,
  Delete,
  Get,
} from '@nestjs/common';
import { UserService } from './user/user.service';
import { TicketService } from './ticket/ticket.service';
import { User as UserModel, Ticket as TicketModel, Prisma } from '@prisma/client';

@Controller()
export class AppController {

  @Get('/hello')
  getHello() {
    return "Hello World!"
  }

}