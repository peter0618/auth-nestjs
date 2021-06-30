import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '@src/modules/auth/auth.service';
import { LocalAuthGuard } from '@src/modules/auth/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * 이 라우터로 요청이 들어오면, 아래와 같은 프로세스가 실행됨.
   *
   * 1) LocalAuthGuard.canActivate() 호출
   * 2) LocalStrategy.validate() 호출
   * 3) LocalAuthGuard.handleRequest() 호출
   * @param req
   */
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    console.log('login!!');
    return this.authService.login(req.user);
  }
}
