import { PatientRepository } from '../../repositories/patient-repository';
import { FindPatientController } from './find-patient-controller';
import { FindPatientUsecase } from './find-patient-usecase';

export const makeFindPatientController = (): FindPatientController => {
  const repository = new PatientRepository();
  const findPatientUsecase = new FindPatientUsecase(repository);
  const findPatientController = new FindPatientController(findPatientUsecase);

  return findPatientController;
};
