import { PatientRepository } from '../../repositories/patient-repository';

type UpdatePatientRequest = {
  id?: string;
  name?: string;
  cpf?: string;
  rg?: string;
  phone?: string;
  email?: string;
  gender?: string;
  address?: string;
  district?: string;
  country?: string;
};

export class UpdatePatientUsecase {
  constructor(private repository: PatientRepository) {}
  async execute(data: UpdatePatientRequest) {
    const patientExists = await this.repository.findByWhere({
      id: data.id,
    });

    if (!patientExists) {
      throw new Error('Patient not exists');
    }

    const patient = await this.repository.update({ id: data.id }, data);

    return patient;
  }
}
