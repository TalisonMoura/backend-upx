const bcrypt = require('bcrypt');
const UserRepository = require('../repositories/UserRepository');
const AuthTrait = require('../traits/AuthTrait');

class LoginService extends AuthTrait {

    /**
     * @param cpf
     * @param password
     * @returns {Promise<{data: {ok: boolean, message: (*)}, status: number}|{data: {ok: boolean, message: string}, status: number}>}
     */
    async loginUser(cpf, password) {

        if (!password || !cpf) {

            return this.responseRequiredFields();
        }

        const user = await UserRepository.findByCpf(cpf);

        if (!user) {

            return this.responseUserNotFound();
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {

            return this.responseUnauthorized("Senha inválida. A senha fornecida não corresponde à senha registrada para este usuário.");
        }

        await user.updateLastDateAcess();

        const role = await UserRepository.findUserType(user.user_types_id);

        const token = this.generateJwtReturnSuccessAuth(user.id, user.cpf, role.description);
        
        const userTokenObject = {
            userId: user.id,
            token: token,
        };

        return userTokenObject
    }

    async logout(token){

        await BlackListRepository.insert(token);

        return this.responseSuccess('Deslogado!')
    }
}

module.exports = new LoginService();