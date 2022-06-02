import { Request, Response } from 'express';
import { FindPatientUsecase } from './find-patient-usecase';

export class FindPatientController {
  constructor(private findPatientUsecase: FindPatientUsecase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const result = await this.findPatientUsecase.execute({
        id: request.params.id,
      });

      return response.status(200).json(result);
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  }
}
