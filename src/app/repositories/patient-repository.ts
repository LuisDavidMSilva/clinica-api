import { Patient } from '@prisma/client';
import { prisma } from '../../infra/database';

export class PatientRepository {
  private repo = prisma;

  // Create a new Patient
  async create(data: Patient): Promise<Patient> {
    const patient = await this.repo.patient.create({ data });

    return patient;
  }

  // Find All Patients
  async findAll(query?: Partial<Patient>): Promise<Patient[]> {
    const patients = await this.repo.patient.findMany({ where: query });

    return patients;
  }

  // Find a Patients
  async findByWhere(where: Partial<Patient>): Promise<Patient> {
    const patient = (await this.repo.patient.findUnique({
      where,
    })) as Patient;

    return patient;
  }

  // Update a Patients
  async update(
    where: Partial<Patient>,
    data: Partial<Patient>,
  ): Promise<Patient> {
    const patient = (await this.repo.patient.update({
      where,
      data,
    })) as Patient;

    return patient;
  }

  // Delete a Patients
  async delete(where: Partial<Patient>): Promise<Patient> {
    const patient = (await this.repo.patient.delete({
      where,
    })) as Patient;

    return patient;
  }
}
