const AtivoController = require('../controllers/AtivoController');

module.exports = function (application) {
    application.post('/register', AtivoController.createAtivo);
}