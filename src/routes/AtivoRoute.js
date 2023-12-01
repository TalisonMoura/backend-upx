const AtivoController = require('../controllers/AtivoController');
const AuthMiddleware =  require('../middleware/AuthMiddleware');
const AuthAdminMiddleware = require('../middleware/AuthAdminMiddleware');


module.exports = function (application) {
    application.post('/register/ativo', AuthAdminMiddleware, AtivoController.createAtivo);
    application.get('/ativo/:id', AuthMiddleware, AtivoController.getById);
}