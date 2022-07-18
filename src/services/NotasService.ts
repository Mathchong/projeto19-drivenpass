import NotasRepository from "../repositories/NotesRepository.js";

export default class NotasService{

    async getAllNotes(){
        console.log("service")
        const notasRepository = new NotasRepository();

        return await notasRepository.getAllNotes()
    }
}