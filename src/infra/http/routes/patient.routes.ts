import { Router, Request, Response } from 'express';
import { makeCreatePatientController } from '../../../app/usecases/create-patient';
import { makeDeletePatientController } from '../../../app/usecases/delete-patient';
import { makeFindAllPatientController } from '../../../app/usecases/find-all-patient';
import { makeFindPatientController } from '../../../app/usecases/find-patient';
import { makeUpdatePatientController } from '../../../app/usecases/update-patient';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

export const patientRouter = Router();

// patientRouter.use(ensureAuthenticated);

patientRouter.post('/', (request: Request, response: Response) =>
  makeCreatePatientController().handle(request, response),
);

patientRouter.delete('/:id', (request: Request, response: Response) =>
  makeDeletePatientController().handle(request, response),
);

patientRouter.get('/', (request: Request, response: Response) =>
  makeFindAllPatientController().handle(request, response),
);

patientRouter.get('/:id', (request: Request, response: Response) =>
  makeFindPatientController().handle(request, response),
);

patientRouter.put('/:id', (request: Request, response: Response) =>
  makeUpdatePatientController().handle(request, response),
);
