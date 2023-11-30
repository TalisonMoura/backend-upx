const {User, UserType } = require('../database/models');
const { Op } = require("sequelize");

class UserRepository {
    /**
     * @param name
     * @param password
     * @param cpf
     * @param email
     * @param image
     * @returns {Promise<Model<any, TModelAttributes>>}
     */
    async createUser(name, password, cpf, email, image) {

        return await User.create({
            name,
            password,
            cpf,
            email,
            image,
        });
    }

    /**
     *
     * @param cpf
     * @returns {Promise<Model<User, TModelAttributes>>}
     */
    async findByCpf(cpf) {

        return await User.findOne({
            where: {cpf: cpf}
        });
    }

    async findUserType(id) {
        return await UserType.findOne({
            where: {id: id}
        });
    }
}

module.exports = new UserRepository();