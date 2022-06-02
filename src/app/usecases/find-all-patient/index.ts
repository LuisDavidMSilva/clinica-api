import { PatientRepository } from '../../repositories/patient-repository';
import { FindAllPatientController } from './find-all-patient-controller';
import { FindAllPatientUsecase } from './find-all-patient-usecase';

export const makeFindAllPatientController = (): FindAllPatientController => {
  const repository = new PatientRepository();
  const findAllPatientUsecase = new FindAllPatientUsecase(repository);
  const findAllPatientController = new FindAllPatientController(
    findAllPatientUsecase,
  );

  return findAllPatientController;
};
