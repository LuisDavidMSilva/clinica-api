import { Patient } from '@prisma/client';
import { PatientRepository } from '../../repositories/patient-repository';

type CreatePatientRequest = {
  name: string;
  cpf: string;
  rg: string;
  phone: string;
  email: string;
  gender: string;
  address: string;
  district: string;
  country: string;
};

export class CreatePatientUsecase {
  constructor(private repository: PatientRepository) {}
  async execute(data: CreatePatientRequest) {
    const emailExists = await this.repository.findByWhere({
      email: data.email,
    });

    const cpfExists = await this.repository.findByWhere({
      cpf: data.cpf,
    });

    const rgExists = await this.repository.findByWhere({
      rg: data.rg,
    });

    if (emailExists || cpfExists || rgExists) {
      throw new Error('Patient already exists');
    }

    if (data.gender !== 'MALE' && data.gender !== 'FEMALE') {
      throw new Error('Gender invalid');
    }

    const patient = await this.repository.create(data as any);

    return patient;
  }
}
