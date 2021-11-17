import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { compare, hash } from 'bcrypt';
import { Prisma, User } from '.prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne({ email: email });

    if (user && compare(password, user.password)) {
      const { password, ...rest } = user;
      return rest;
    }
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: Prisma.UserCreateInput) {
    const hashed = await hash(user.password, 21);
    const t = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: hashed,
    };
    this.userService.create(t);
  }
}
