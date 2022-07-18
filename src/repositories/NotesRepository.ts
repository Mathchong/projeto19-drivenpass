import client from '../app/database.js';

export default class NotesRepository{

    async getAllNotes(){
        console.log("repository")
        const notes =  await client.notes.findMany()
        console.log(notes)
        return notes
    }
}