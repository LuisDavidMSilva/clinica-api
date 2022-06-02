import { PatientRepository } from '../../repositories/patient-repository';
import { CreatePatientController } from './create-patient-controller';
import { CreatePatientUsecase } from './create-patient-usecase';

export const makeCreatePatientController = (): CreatePatientController => {
  const repository = new PatientRepository();
  const createPatientUsecase = new CreatePatientUsecase(repository);
  const createPatientController = new CreatePatientController(
    createPatientUsecase,
  );

  return createPatientController;
};
