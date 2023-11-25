const ManutencaoController = require('../controllers/ManutencaoController');

module.exports = function (application) {
    application.post('/register', ManutencaoController.createManutencao);
}