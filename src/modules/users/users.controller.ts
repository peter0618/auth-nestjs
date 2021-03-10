import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from '@src/modules/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * 회원 목록을 조회합니다.
   */
  @Get()
  getAll() {
    return this.usersService.getAll();
  }

  /**
   * 특정 회원을 id 로 조회합니다.
   *
   * @param id (Note: ParseIntPipe 를 쓰지 않으면, id: number 로 선언해도 id type 이 string 으로 셋팅됩니다.)
   */
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getById(id);
  }
}
