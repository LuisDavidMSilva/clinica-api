import { sign, verify } from 'jsonwebtoken';
import { auth } from '../../config/auth';

export const generateToken = (id: string) => {
  const token = sign({}, auth.secretKey, {
    subject: id,
    expiresIn: auth.expiresIn,
  });

  return token;
};

export const decodeToken = (token: string) => {
  const decoded = verify(token, auth.secretKey);

  return decoded;
};
