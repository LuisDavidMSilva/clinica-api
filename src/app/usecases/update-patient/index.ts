import { PatientRepository } from '../../repositories/patient-repository';
import { UpdatePatientController } from './update-patient-controller';
import { UpdatePatientUsecase } from './update-patient-usecase';

export const makeUpdatePatientController = (): UpdatePatientController => {
  const repository = new PatientRepository();
  const updatePatientUsecase = new UpdatePatientUsecase(repository);
  const updatePatientController = new UpdatePatientController(
    updatePatientUsecase,
  );

  return updatePatientController;
};
