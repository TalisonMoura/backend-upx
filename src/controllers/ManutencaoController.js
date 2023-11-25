const ManutencaoService = require('../services/ManutencaoService');

class ManutencaoController {

    async createManutencao(req, res) {

        try {

            const { ativoId, userId, report } = req.body;

            const result = await ManutencaoService.createManutencao(ativoId, userId, report);

            return res.status(result.status).json(result.data)

        }catch(error){

            console.log(error.message)

            return res.status(500).json({
                ok: false,
                message: 'Ocorreu um erro interno no servidor durante a criação do usuário. Entre em contato com o suporte.'
            });
        }
    }
}

module.exports = new ManutencaoController();