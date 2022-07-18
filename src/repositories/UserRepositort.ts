import client from '../app/database.js';

export default class UserRepository {
    async getUserByEmail(email) {
        return await client.users.findUnique({
            where: {
                email: email
            }
        })
    }
}
