import { PatientRepository } from '../../repositories/patient-repository';
import { DeletePatientController } from './delete-patient-controller';
import { DeletePatientUsecase } from './delete-patient-usecase';

export const makeDeletePatientController = (): DeletePatientController => {
  const repository = new PatientRepository();
  const deletePatientUsecase = new DeletePatientUsecase(repository);
  const deletePatientController = new DeletePatientController(
    deletePatientUsecase,
  );

  return deletePatientController;
};
