import { Injectable } from '@nestjs/common';
import { User } from '@src/modules/users/user.entity';

@Injectable()
export class UsersRepository {
  private users: User[] = [];

  constructor() {
    this.users.push(
      new User(
        1,
        'john',
        'john@gmail.com',
        '$2b$10$8XoiI18CkSavo41CONAT..Sq2BRYR3HxNb7dewcbTIsE6c8D58cVu', // 1111
      ),
    );
    this.users.push(
      new User(
        2,
        'peter',
        'peter@gmail.com',
        '$2b$10$zm3YHYhb9YFOHQucWokdEuZfD.3GSark8lwKVekgQ0p6BHTXEzg9S', // 2222
      ),
    );
    this.users.push(
      new User(
        3,
        'koo',
        'koo@gmail.com',
        '$2b$10$aMQbo9m0rUkv8VQ95t5B/.RqeP6kEEtN26FTIg0arCAK/kGMbhWZ6', // 3333
      ),
    );
    this.users.push(
      new User(
        4,
        'david',
        'david@gmail.com',
        '$2b$10$EpgWijDDBTZnRLWcc1i/1.Fg1T3mqPaeBk0eGJYYw9benQ0RlSiEG', // 4444
      ),
    );
    this.users.push(
      new User(
        5,
        'grace',
        'grace@gmail.com',
        '$2b$10$MUadvXPH02OU3axUf69WBeomAK7vTJNNXLkwcC.wAHruPJOFV5mVq', // 5555
      ),
    );
  }

  getAll(): User[] {
    return this.users;
  }

  getById(id: number): User {
    return this.users.filter((user) => user.id === id)[0];
  }

  async getByEmail(email: string): Promise<User> {
    return this.users.filter((user) => user.email === email)[0];
  }
}
