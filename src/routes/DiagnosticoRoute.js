const DiagnosticoController = require('../controllers/DiagnosticoController');

module.exports = function (application) {
    application.post('/register/diagnostico', DiagnosticoController.createDiagnostico);
}