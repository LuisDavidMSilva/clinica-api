import { Request, Response } from 'express';
import { FindAllPatientUsecase } from './find-all-patient-usecase';

export class FindAllPatientController {
  constructor(private findAllPatientUsecase: FindAllPatientUsecase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const result = await this.findAllPatientUsecase.execute(request.query);

      return response.status(200).json(result);
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  }
}
