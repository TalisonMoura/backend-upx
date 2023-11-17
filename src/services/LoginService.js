const bcrypt = require('bcrypt');
const UserRepository = require('../repositories/UserRepository');
const BlackListRepository = require('../repositories/BlackListRepository');
const AuthTrait = require('../traits/AuthTrait');

class LoginService extends AuthTrait {

    /**
     * @param email
     * @param password
     * @returns {Promise<{data: {ok: boolean, message: (*)}, status: number}|{data: {ok: boolean, message: string}, status: number}>}
     */
    async loginUser(email, password) {

        if (!password || !email) {

            return this.responseRequiredFields();
        }

        const user = await UserRepository.findByEmail(email);

        if (!user) {

            return this.responseUserNotFound();
        }

        if (!user.password && user.googleId) {

            return this.responseUnauthorized("Você só pode fazer login com Google. Faça login com a conta do Google associada a este email.");
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {

            return this.responseUnauthorized("Senha inválida. A senha fornecida não corresponde à senha registrada para este usuário.");
        }

        await user.updateLastDateAcess();

        return this.generateJwtReturnSuccessAuth(user.id, user.name, user.email, user.image);
    }

    async logout(token){

        await BlackListRepository.insert(token);

        return this.responseSuccess('Deslogado!')
    }
}

module.exports = new LoginService();