const ManutencaoService = require('../services/ManutencaoService');

class ManutencaoController {

    async createManutencao(req, res) {

        try {

            const { ativoId, userId, report } = req.body;

            const result = await ManutencaoService.createManutencao(ativoId, userId, report);

            return res.json(result);

        }catch(error){

            console.log(error.message)

            return res.status(500).json({
                ok: false,
                message: 'Ocorreu um erro interno no servidor durante a criação do usuário. Entre em contato com o suporte.'
            });
        }
    }

    async getAllManutencao(req, res) {

        try {

            const { id } = req.params;

            const result = await ManutencaoService.getAllManutencao(id);

            return res.json({ data: result });

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