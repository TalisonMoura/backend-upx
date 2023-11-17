const jwt = require("jsonwebtoken");
const config = require("../config/Auth");
require('dotenv').config();
const ResponseTrait = require('./ResponseTrait');

module.exports = class AuthTrait extends ResponseTrait {

    /**
     * @param {number} id
     * @param {string} name
     * @param {string} email
     * @param {string} image
     * @returns {{data: {ok: boolean, message: (*)}, status: number}}
     */
    generateJwtReturnSuccessAuth(id, name, email, image) {

        const token = jwt.sign({id, name, email, image}, config.secret, {expiresIn: config.expireIn})

        return this.responseSuccess(token);
    }
}