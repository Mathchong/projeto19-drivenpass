import client from '../app/database.js';

export default class NotesRepository {

    async getAllNotes() {
        return await client.notes.findMany()
    }
}