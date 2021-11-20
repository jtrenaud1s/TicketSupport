import { Inject, Injectable, Res, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../user/user.service'
import { compare, hash } from 'bcrypt'
import { Prisma, User } from '.prisma/client'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    @Inject('JwtAccessService') private readonly jwtAccessService: JwtService,
    @Inject('JwtRefreshService') private readonly jwtRefreshService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne({ email: email })

    if (user && compare(password, user.password)) {
      const { password, ...rest } = user
      return rest
    }
  }

  async login(user: any, @Res({ passthrough: true }) res) {
    console.log('Service Layer Login')
    const payload = { email: user.email, sub: user.id }
    const refreshToken = this.jwtRefreshService.sign(payload)
    res.cookie('ticket-jwtr', refreshToken, { httpOnly: true })

    return {
      access_token: this.jwtAccessService.sign(payload),
      user: user,
    }
  }

  async register(user: Prisma.UserCreateInput) {
    console.log('Service Layer Register')
    const hashed = await hash(user.password, 6)
    console.log('hash complete')
    const t = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: hashed,
    }
    return this.userService.create(t)
  }

  async refreshAccessToken(payload: any) {
    // const validation = this.jwtRefreshService.verify(refreshToken)
    // if (!validation) throw new UnauthorizedException()

    // const payload = this.jwtRefreshService.decode(refreshToken)
    return { access_token: this.jwtRefreshService.sign(payload) }
  }
}
