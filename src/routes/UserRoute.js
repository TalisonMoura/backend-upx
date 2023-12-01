const UserController = require('../controllers/UserController');
const AuthAdminMiddleware = require('../middleware/AuthAdminMiddleware');

module.exports = function (application) {
    application.post('/register', AuthAdminMiddleware, UserController.createUser);
}