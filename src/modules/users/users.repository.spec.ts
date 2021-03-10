import { UsersRepository } from '@src/modules/users/users.repository';
import { Test, TestingModule } from '@nestjs/testing';

describe('UsersRepository', () => {
  let repository: UsersRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersRepository],
    }).compile();

    repository = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('User', () => {
    it('should be retrieved', () => {
      const users = repository.getAll();
      expect(Array.isArray(users)).toEqual(true);
    });

    it('should be retrieved by id', () => {
      const user = repository.getById(3);
      expect(user.id).toEqual(3);
      expect(user.name).toEqual('koo');
      expect(user.email).toEqual('koo@gmail.com');
    });
  });
});
