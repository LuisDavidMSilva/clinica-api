import { Request, Response } from 'express';
import { UpdatePatientUsecase } from './update-patient-usecase';

export class UpdatePatientController {
  constructor(private updatePatientUsecase: UpdatePatientUsecase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const result = await this.updatePatientUsecase.execute({
        id: request.params.id,
        ...request.body,
      });

      return response.status(200).json(result);
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  }
}
