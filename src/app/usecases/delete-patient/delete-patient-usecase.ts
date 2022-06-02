import { PatientRepository } from '../../repositories/patient-repository';

type DeletePatientRequest = {
  id: string;
};

export class DeletePatientUsecase {
  constructor(private repository: PatientRepository) {}
  async execute(data: DeletePatientRequest) {
    const patientExists = await this.repository.findByWhere({
      id: data.id,
    });

    if (!patientExists) {
      throw new Error('Patient not exists');
    }

    await this.repository.delete({ id: data.id });
  }
}
