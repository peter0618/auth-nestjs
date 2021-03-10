import { Injectable } from '@nestjs/common';
import * as cipherUtil from '@utility/cipher';
import { UsersRepository } from '@src/modules/users/users.repository';
import { User } from '@src/modules/users/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  getAll() {
    const rows: User[] = this.usersRepository.getAll();
    return rows.map((row) => {
      const { id, email, name } = row;
      return {
        id,
        email,
        name,
      };
    });
  }

  getById(id: number) {
    const row = this.usersRepository.getById(id);
    const { email, name } = row;
    return { id, email, name };
  }
}
