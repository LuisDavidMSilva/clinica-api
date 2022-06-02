import { hash, compare as verify } from 'bcryptjs';

const salt = 8;

export const generate = async (payload: string): Promise<string> => {
  return await hash(payload, salt);
};

export const compare = async (
  payload: string,
  payloadHash: string,
): Promise<boolean> => {
  return await verify(payload, payloadHash);
};
