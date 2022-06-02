import { Request, Response } from 'express';
import { AuthenticateUseCase } from './authenticate-usecase';

export class AuthenticateController {
  constructor(private authenticateUseCase: AuthenticateUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;

      const result = await this.authenticateUseCase.execute({
        email,
        password,
      });

      return response.status(200).json({ result });
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  }
}
