import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { TicketModule } from './ticketOld/ticket.module';
import { UserModule } from './userOld/user.module';

@Module({
  imports: [TicketModule, UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
