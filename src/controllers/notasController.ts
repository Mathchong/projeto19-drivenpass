import { Request, Response } from 'express';

import NotasService from '../services/NotasService.js'

export default class notesController {

    async getAllNotes(req: Request, res: Response){
        console.log('controller')
        const notasService = new NotasService();

        const notes = await notasService.getAllNotes()

        return res.status(200).json(notes)
    }
}