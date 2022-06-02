import { Router, Request, Response } from 'express';
import { makeAuthenticateUserController } from '../../../app/usecases/authenticate';

export const authenticationRouter = Router();

authenticationRouter.post('/', (request: Request, response: Response) =>
  makeAuthenticateUserController().handle(request, response),
);
