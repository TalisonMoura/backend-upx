const UserController = require('../controllers/UserController');

module.exports = function (application) {
    application.post('/register', UserController.createUser);
}