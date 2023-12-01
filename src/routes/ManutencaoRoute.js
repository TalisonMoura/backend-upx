const ManutencaoController = require('../controllers/ManutencaoController');
const AuthMiddleware = require('../middleware/AuthMiddleware');

module.exports = function (application) {
    application.post('/register/manutencao', AuthMiddleware, ManutencaoController.createManutencao);
    application.get('/manutencao/:id', AuthMiddleware, ManutencaoController.getAllManutencao);
}
