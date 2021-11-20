import { Module } from '@nestjs/common'
import { JwtModule, JwtService } from '@nestjs/jwt'

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.REFRESH_TOKEN_SECRET,
      signOptions: { expiresIn: '60d' },
    }),
  ],
  providers: [
    {
      provide: 'JwtRefreshService',
      useExisting: JwtService,
    },
  ],
  exports: ['JwtRefreshService'],
})
export class JwtRefreshModule {}
