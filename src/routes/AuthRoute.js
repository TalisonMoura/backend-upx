const LoginAuthController = require('../controllers/LoginAuthController');
const AuthMiddleware = require('../middleware/AuthMiddleware')

module.exports = function (application) {
    application.post('/login', LoginAuthController.create);
    application.post('/logout', AuthMiddleware, LoginAuthController.delete);
}