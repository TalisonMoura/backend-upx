const {User} = require('../database/models');

class UserRepository {
    /**
     * @param name
     * @param password
     * @param cpf
     * @param email
     * @param image
     * @param googleId
     * @returns {Promise<Model<any, TModelAttributes>>}
     */
    async createUser(name, password, cpf, email, image, googleId) {

        return await User.create({
            name,
            password,
            cpf,
            email,
            image,
            googleId
        });
    }

    /**
     *
     * @param email
     * @returns {Promise<Model<User, TModelAttributes>>}
     */
    async findByEmail(email) {

        return await User.findOne({
            where: {email: email}
        });
    }
}

module.exports = new UserRepository();