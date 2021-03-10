import * as cipherUtil from '@utility/cipher';

describe('bcrypt hash', () => {
  let hash = null;

  it('has to be well made', async () => {
    const password = '1234';
    hash = await cipherUtil.encryptToBcrypt(password);
    expect(hash.startsWith('$2b$10')).toEqual(true);
  });

  it('has to be matched', async () => {
    const password = '1234';
    const isMatch = await cipherUtil.isPasswordValid(password, hash);
    expect(isMatch).toEqual(true);
  });

  it('has to be failed', async () => {
    const password = '1235';
    const isMatch = await cipherUtil.isPasswordValid(password, hash);
    expect(isMatch).toEqual(false);
  });

  it('should make test hash', async () => {
    let password = '1111';
    hash = await cipherUtil.encryptToBcrypt(password);
    console.log(hash);

    password = '2222';
    hash = await cipherUtil.encryptToBcrypt(password);
    console.log(hash);

    password = '3333';
    hash = await cipherUtil.encryptToBcrypt(password);
    console.log(hash);

    password = '4444';
    hash = await cipherUtil.encryptToBcrypt(password);
    console.log(hash);

    password = '5555';
    hash = await cipherUtil.encryptToBcrypt(password);
    console.log(hash);
  });
});
