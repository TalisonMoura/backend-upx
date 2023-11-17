const {User} = require('../database/models');

class UserRepository {
    /**
     * @param name
     * @param password
     * @param ra
     * @param email
     * @param image
     * @param googleId
     * @returns {Promise<Model<any, TModelAttributes>>}
     */
    async createUser(name, password, ra, email, image, googleId) {

        return await User.create({
            name,
            password,
            ra,
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