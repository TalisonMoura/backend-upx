require('dotenv').config();
const LoginService = require('../services/LoginService')

class GoogleAuthController {

    async create(req, res) {

        try {

            const { cpf, password } = req.body;
            const result = await LoginService.loginUser(cpf, password);

            return res.status(result.status).json(result.data)

        } catch (error) {

            console.log(error.message)
            return res.status(500).json({error: 'Internal error'})
        }
    }

    async delete(req, res) {

        try {

            const auth = req.headers.authorization;

            const [, token] = auth.split(" ");

            const result = await LoginService.logout(token);

            return res.status(result.status).json(result.data)

        } catch (error) {

            console.log(error.message)
            return res.status(500).json({error: 'Internal error'})
        }
    }
}

module.exports = new GoogleAuthController();