import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@src/modules/users/users.service';
import * as cipherUtil from '@utility/cipher';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    console.log(`validateUser`);
    const user = await this.usersService.getByEmail(email);
    if (user && (await cipherUtil.isPasswordValid(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { userId: user.id, username: user.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
