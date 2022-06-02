import { UserRepository } from '../../repositories/user-repository';
import { AuthenticateController } from './authenticate-controller';
import { AuthenticateUseCase } from './authenticate-usecase';

export const makeAuthenticateUserController = (): AuthenticateController => {
  const repository = new UserRepository();
  const authenticateUseCase = new AuthenticateUseCase(repository);
  const authenticateController = new AuthenticateController(
    authenticateUseCase,
  );

  return authenticateController;
};
