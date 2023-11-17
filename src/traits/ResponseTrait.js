const ValidateTrait = require('../traits/ValidateTrait');

module.exports = class extends ValidateTrait {

    /**
     * @param {string} message
     * @returns {{data: {ok: true, message:string}, status: 200}}
     */
    responseSuccess(message) {
        return {
            status: 200,
            data: {
                ok: true,
                message
            }
        }
    }

    /**
     * @returns {{data: {ok: false, message: string}, status: 400}}
     */
    responseRequiredFields() {
        return {
            status: 400,
            data: {
                ok: false,
                message: "Campos inválidos na solicitação. Certifique-se de que todos os campos necessários estão presentes e válidos."
            }
        }
    }

    /**
     * @returns {{data: {ok: false, message: "Senha inválida. Certifique-se de a senha deve ter 8 dígitos, ter letras maiúsculas e minúsculas e números."}, status: 400}}
     */
    responseInvalidPassword() {
        return {
            status: 400,
            data: {
                ok: false,
                message: "Senha inválida. Certifique-se de a senha deve ter 8 dígitos, ter letras maiúsculas e minúsculas e números."
            }
        }
    }

    /**
     * @returns {{data: {ok: false, message: "Senha inválida. Certifique-se de a senha deve ter 8 dígitos, ter letras maiúsculas e minúsculas e números."}, status: 400}}
     */
    responseInvalidEmail() {
        return {
            status: 400,
            data: {
                ok: false,
                message: "Email inválido."
            }
        }
    }

    /**
     * @returns {{data: {ok: false, message: string}, status: 404}}
     */
    responseUserNotFound() {
        return {
            status: 404,
            data: {
                ok: false,
                message: "Usuário com o email especificado não foi encontrado."
            }
        }
    }

    /**
     * @param {string} message
     * @returns {{data: {ok: false, message:string}, status: 401}}
     */
    responseUnauthorized(message) {
        return {
            status: 401,
            data: {
                ok: false,
                message
            }
        }
    }

    /**
     * @param {string} message
     * @returns {{data: {ok: false, message: string}, status: 422}}
     */
    responseUnprocessable(message) {
        return {
            status: 422,
            data: {
                ok: false,
                message
            }
        }
    }

    /**
     * @param {string} message
     * @returns {{data: {ok: false, message: string}, status: 409}}
     */
    responseReadyUsed(message) {
        return {
            status: 409,
            data: {
                ok: false,
                message
            }
        }
    }

    /**
     * @param {string} message
     * @returns {{data: {ok: true, message: string}, status: 201}}
     */
    responseSuccessCreated(message) {
        return {
            status: 201,
            data: {
                ok: true,
                message
            }
        }
    }
}