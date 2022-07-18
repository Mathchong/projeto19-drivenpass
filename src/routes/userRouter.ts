import { Router } from 'express';

import registerSchemaValidation from '../middleware/validateSchema.js';

const usersRouter = Router();

usersRouter.post('/register', registerSchemaValidation, (req, res) => {})
usersRouter.post('/login', () => { })

export default usersRouter;