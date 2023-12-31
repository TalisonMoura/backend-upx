const UserRepository = require("../repositories/UserRepository");
const bcrypt = require("bcrypt");
const ResponseTrait = require('../traits/ResponseTrait');

class UserService extends ResponseTrait {

    /**
     * @param name
     * @param password
     * @param cpf
     * @param email
     * @param image
     * @param confirm_password
     * @returns {Promise<{data: {ok: boolean, message: string}, status: number}>}
     */
    async createUserWithEncryptedPassword(name, password, cpf, email, image, confirm_password) {

        if (!name || !password || !email || !confirm_password || !cpf) {

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

        const userByCpf = await UserRepository.findByCpf(cpf);

        if (userByCpf) {

            return this.responseReadyUsed("This user already exist");
        }

        const hashedPassword = await bcrypt.hash(password, 8);

        await UserRepository.createUser(
            name,
            hashedPassword,
            cpf,
            email,
            image
        );

        return this.responseSuccessCreated('Usuário criado com sucesso');
    }
}

module.exports = new UserService();
