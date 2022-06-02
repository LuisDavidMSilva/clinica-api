import { Request, Response, Router } from 'express';

import { main } from '../../database/seeds';

export const seedsRouter = Router();

seedsRouter.get('/', async (request: Request, response: Response) => {
  await main();
  return response.json('ok');
});
