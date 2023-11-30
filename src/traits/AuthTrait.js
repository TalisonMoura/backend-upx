const jwt = require("jsonwebtoken");
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

        const token = jwt.sign({id, cpf, role}, process.env.SECRET, { expiresIn: process.env.EXPIRES_IN })

        return this.responseSuccess(token);
    }
}