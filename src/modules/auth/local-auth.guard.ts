import { AuthGuard } from '@nestjs/passport';
import {
  BadRequestException,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  canActivate(context: ExecutionContext) {
    console.log('canActivate');
    const request = context.switchToHttp().getRequest();
    const { email, password } = request.body;
    if (!email || !password) {
      throw new BadRequestException('email and password both have to be set');
    }
    return super.canActivate(context);
  }

  handleRequest(err, user, info, context, status) {
    console.log('handleRequest');
    if (err || !user) {
      throw err || new BadRequestException(info);
    }
    return user;
  }
}
