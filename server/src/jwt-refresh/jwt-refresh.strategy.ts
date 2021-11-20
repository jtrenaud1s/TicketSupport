import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refreshToken') {
  constructor() {
    super({
      ignoreExpiration: false,
      secretOrKey: process.env.REFRESH_TOKEN_SECRET,
      signOptions: { expiresIn: '60d' },
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          let data = request?.cookies['ticket-jwtr']
          console.log("Tried to get cookie")
          console.log(data)
          if (!data) return null
          return data
        },
      ]),
    })
  }

  async validate(payload: any) {
    console.log("payload", payload)
    if (payload === null) {
      throw new UnauthorizedException()
    }
    return { email: payload.email, sub: payload.sub }
  }
}
