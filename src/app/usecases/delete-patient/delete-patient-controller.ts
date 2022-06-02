import { Request, Response } from 'express';
import { DeletePatientUsecase } from './delete-patient-usecase';

export class DeletePatientController {
  constructor(private deletePatientUsecase: DeletePatientUsecase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const result = await this.deletePatientUsecase.execute({
        id: request.params.id,
      });

      return response.status(200).json({ ok: 'Deleted' });
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  }
}
