import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserModule } from 'src/user/user.module'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from '../jwt-access/jwt-access.strategy'
import { LocalStrategy } from './local.strategy'
import { JwtRefreshStrategy } from '../jwt-refresh/jwt-refresh.strategy'
import { JwtAccessModule } from 'src/jwt-access/jwt-access.module'
import { JwtRefreshModule } from 'src/jwt-refresh/jwt-refresh.module'

@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'accessToken' }),
    JwtAccessModule,
    JwtRefreshModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtRefreshStrategy, LocalStrategy],
})
export class AuthModule {}
