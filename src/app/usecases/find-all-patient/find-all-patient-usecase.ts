import { PatientRepository } from '../../repositories/patient-repository';

type FindAllPatientRequest = {
  id?: string;
  name?: string;
  cpf?: string;
  rg?: string;
  phone?: string;
  email?: string;
  gender?: string;
  address?: string;
  district?: string;
  county?: string;
};

export class FindAllPatientUsecase {
  constructor(private repository: PatientRepository) {}
  async execute(data: FindAllPatientRequest) {
    const patients = await this.repository.findAll(data);

    return patients;
  }
}
