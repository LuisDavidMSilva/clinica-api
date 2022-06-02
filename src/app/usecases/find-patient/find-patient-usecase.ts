import { PatientRepository } from '../../repositories/patient-repository';

type FindPatientRequest = {
  id: string;
};

export class FindPatientUsecase {
  constructor(private repository: PatientRepository) {}
  async execute(data: FindPatientRequest) {
    const patient = await this.repository.findByWhere({ id: data.id });

    if (!patient) {
      throw new Error('Patient not exists');
    }

    return patient;
  }
}
