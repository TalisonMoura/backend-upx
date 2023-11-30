const jwt = require("jsonwebtoken");
const config = require("../config/Auth");
require('dotenv').config();
const ResponseTrait = require('./ResponseTrait');

module.exports = class AuthTrait extends ResponseTrait {

    /**
     * @param {number} id
     * @param {string} cpf
     * @param {string} role
     * @returns {{data: {ok: boolean, message: (*)}, status: number}}
     */
    generateJwtReturnSuccessAuth(id, cpf, role) {

        const token = jwt.sign({id, cpf, role}, config.secret, {expiresIn: config.expireIn})

        return this.responseSuccess(token);
    }
}