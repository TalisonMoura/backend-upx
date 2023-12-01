const DiagnosticoController = require('../controllers/DiagnosticoController');
const AuthMiddleware =  require('../middleware/AuthMiddleware');

module.exports = function (application) {
    application.post('/register/diagnostico', AuthMiddleware, DiagnosticoController.createDiagnostico);
    application.get('/diagnostico/:id', AuthMiddleware, DiagnosticoController.getAllDiagnostico)
}