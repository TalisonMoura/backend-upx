const AtivoController = require('../controllers/AtivoController');

module.exports = function (application) {
    application.post('/register/ativo', AtivoController.createAtivo);
    application.get('/register/ativo/:id', AtivoController.getById);
}