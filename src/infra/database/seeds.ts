import { v4 as uuid } from 'uuid';

import { prisma } from '../database';
import { generate } from '../utils/encrypt';

export const main = async () => {
  await prisma.user.deleteMany({});

  Promise.all([
    await prisma.user.create({
      data: {
        id: uuid(),
        name: 'Admin',
        email: 'admin@admin.com',
        password: await generate('12345678'),
      },
    }),

    await prisma.user.create({
      data: {
        id: uuid(),
        name: 'Tester',
        email: 'test@test.com',
        password: await generate('12345678'),
      },
    }),
  ]);
};
