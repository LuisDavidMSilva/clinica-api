import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { auth } from '../../../config/auth';

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, auth.secretKey);

    request.user = {
      id: String(user_id),
    };

    next();
  } catch (error) {
    throw new Error('Invalid Token');
  }
}
