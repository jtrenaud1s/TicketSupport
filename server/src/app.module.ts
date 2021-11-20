import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './ticket/ticket.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { JwtRefreshModule } from './jwt-refresh/jwt-refresh.module';
import { JwtAccessModule } from './jwt-access/jwt-access.module';

@Module({
  imports: [PrismaModule, TicketModule, UserModule, AuthModule, JwtRefreshModule, JwtAccessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
