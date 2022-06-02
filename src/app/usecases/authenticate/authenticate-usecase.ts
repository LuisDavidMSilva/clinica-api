import { UserRepository } from '../../repositories/user-repository';
import { compare } from '.././../../infra/utils/encrypt';
import { generateToken } from '../../../infra/utils/jwt-token';

type AuthenticateRequest = {
  email: string;
  password: string;
};

export class AuthenticateUseCase {
  constructor(private repository: UserRepository) {}

  async execute({ email, password }: AuthenticateRequest) {
    const account = await this.repository.findByEmail(email);

    if (!account) throw new Error('Invalid e-mail/password combination. 1');

    const isPasswordValid = await compare(password, account.password);

    if (!isPasswordValid) {
      throw new Error('Invalid e-mail/password combination');
    }

    const token = generateToken(account.id);

    return {
      user: {
        id: account.id,
        name: account.name,
        email: account.email,
      },
      token,
    };
  }
}
