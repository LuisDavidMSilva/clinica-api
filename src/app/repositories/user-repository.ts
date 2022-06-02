import { User } from '@prisma/client';
import { prisma } from '../../infra/database';

export class UserRepository {
  private repo = prisma;

  async findByEmail(email: string): Promise<User> {
    const account = (await this.repo.user.findUnique({
      where: { email },
    })) as User;

    return account;
  }
}
