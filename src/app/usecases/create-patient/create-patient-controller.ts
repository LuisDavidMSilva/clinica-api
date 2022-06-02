import { Request, Response } from 'express';
import { CreatePatientUsecase } from './create-patient-usecase';

export class CreatePatientController {
  constructor(private createPatientUsecase: CreatePatientUsecase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, cpf, rg, phone, email, gender, address, district, county } =
        request.body;

      const result = await this.createPatientUsecase.execute({
        name,
        cpf,
        rg,
        phone,
        email,
        gender,
        address,
        district,
        county,
      });

      return response.status(200).json(result);
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  }
}
