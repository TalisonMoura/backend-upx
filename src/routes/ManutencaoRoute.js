const ManutencaoController = require('../controllers/ManutencaoController');

module.exports = function (application) {
    application.post('/register/manutencao', ManutencaoController.createManutencao);
}