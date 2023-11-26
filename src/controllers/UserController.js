const UserService = require('../services/UserService');

class UserController {

    async createUser(req, res) {

        try {

            const {name, password, confirm_password, cpf, email, image} = req.body;

            const result = await UserService.createUserWithEncryptedPassword(name, password, cpf, email, image, confirm_password);

            return res.status(result.status).json(result.data)

        } catch (error) {

            console.log(error.message)

            return res.status(500).json({
                ok: false,
                message: 'Ocorreu um erro interno no servidor durante a criação do usuário. Entre em contato com o suporte.'
            })
        }
    }
}

module.exports = new UserController();


