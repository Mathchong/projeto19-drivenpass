import { Router } from 'express';

import cardsRouter from './cardsRouter.js';
import credentialsRouter from './credentialsRouter.js';
import notesRouter from './notesRouter.js';
import userRouter from './userRouter.js';
import wifisRouter from './wifisRouter.js';

const router = Router();

router.use('/cards', cardsRouter)
router.use('/credentials', credentialsRouter)
router.use('/notes', notesRouter)
router.use('/user', userRouter)
router.use('/wifis', wifisRouter)


export default router;