import { Router } from 'express';
import { seedsRouter } from './seeds.routes';
import { authenticationRouter } from './authentication.routes';
import { patientRouter } from './patient.routes';

export const router = Router();

router.use('/seeds', seedsRouter);
router.use('/authentication', authenticationRouter);
router.use('/patients', patientRouter);
