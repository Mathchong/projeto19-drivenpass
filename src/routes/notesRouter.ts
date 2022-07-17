import { Router } from 'express';

const notesRouter = Router();

notesRouter.post('/', () => { })
notesRouter.get('/', () => { })
notesRouter.get('/:id', () => { })
notesRouter.delete('/:id', () => { })

export default notesRouter;