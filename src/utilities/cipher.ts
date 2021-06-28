import * as bcrypt from 'bcrypt';
import { cipherConstant } from '@utility/cipher.constant';

/**
 * password 의 validation 을 확인합니다.
 * @param password
 * @param hashedPassword
 */
export const isPasswordValid = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

/**
 * plainText 에 Bcrypt 알고리즘을 적용하여 암호화 합니다.
 * @param plainText
 */
export const encryptToBcrypt = async (plainText: string) => {
  return await bcrypt.hash(plainText, cipherConstant.SALT_OR_ROUNDS);
};
