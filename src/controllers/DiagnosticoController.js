const DiagnosticoService = require('../services/DisgnosticoService');

class DiagnosticoController {

    async createDiagnostico(req, res) {

        try {

            const { ativoId, userId, report, materials } = req.body;

            const result = await DiagnosticoService.createDiagnostico(ativoId, userId, report, materials);

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

module.exports = new DiagnosticoController();