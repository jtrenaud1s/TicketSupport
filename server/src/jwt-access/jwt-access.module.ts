import { Module } from '@nestjs/common'
import { JwtModule, JwtService } from '@nestjs/jwt'

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.ACCESS_TOKEN_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    {
      provide: 'JwtAccessService',
      useExisting: JwtService,
    },
  ],
  exports: ['JwtAccessService'],
})
export class JwtAccessModule {}
