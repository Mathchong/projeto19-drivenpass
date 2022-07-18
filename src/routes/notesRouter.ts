import { Router } from 'express';

import NotesController from '../controllers/notasController.js';

const notesRouter = Router();

const notesController = new NotesController();

notesRouter.post('/', () => { })
notesRouter.get('/', (req, res) => notesController.getAllNotes(req, res));
notesRouter.get('/:id', () => { })
notesRouter.delete('/:id', () => { })

export default notesRouter;