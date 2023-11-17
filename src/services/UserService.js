const UserRepository = require("../repositories/UserRepository");
const bcrypt = require("bcrypt");
const ResponseTrait = require('../traits/ResponseTrait');

class UserService extends ResponseTrait {

    /**
     * @param name
     * @param password
     * @param ra
     * @param email
     * @param image
     * @param confirm_password
     * @returns {Promise<{data: {ok: boolean, message: string}, status: number}>}
     */
    async createUserWithEncryptedPassword(name, password, ra, email, image, confirm_password) {

        if (!name || !password || !email || !confirm_password) {

            return this.responseRequiredFields();
        }

        if(!this.isValidEmail(email)){

            return this.responseInvalidEmail()
        }

        if(!this.isValidPassword(password)){

            return this.responseInvalidPassword()
        }

        if (password !== confirm_password) {

            return this.responseUnprocessable("A senha e a confirmação de senha não correspondem. Certifique-se de que ambas as senhas sejam iguais.")
        }

        const userByEmail = await UserRepository.findByEmail(email);

        if (userByEmail) {

            return this.responseReadyUsed("O e-mail especificado já está em uso por outro usuário");
        }

        const hashedPassword = await bcrypt.hash(password, 8);

        await UserRepository.createUser(
            name,
            hashedPassword,
            ra,
            email,
            image,
            null
        );

        return this.responseSuccessCreated('Usuário criado com sucesso');
    }
}

module.exports = new UserService();
