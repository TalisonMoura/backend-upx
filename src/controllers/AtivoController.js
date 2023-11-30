const AtivoService = require('../services/AtivoService');

class AtivoController {
    
    async createAtivo(req, res) {

        try{

            const { userId, name, numserie, manufacturer, tipo, model, department, location, manufacturingDate } = req.body;

            const result = await AtivoService.createAtivo(userId, name, numserie, manufacturer, tipo, model, department, location, manufacturingDate);

            return res.status(result.status).json(result.data)

        }catch(error){

            console.log(error.message)

            return res.status(500).json({
                ok: false,
                message: 'Ocorreu um erro interno no servidor durante a criação do usuário. Entre em contato com o suporte.'
            });
        }
    }

    async getById(req, res) {

        const { id } = req.params;
    
        try {
            
            const result = await AtivoService.getAtivoById(id);
    
            return res.json(result);

        } catch (error) {
            console.log(error.message);
    
            return res.status(500).json({
                ok: false,
                message: 'Ocorreu um erro interno no servidor ao obter o ativo. Entre em contato com o suporte.',
            });
        }
    }
}

module.exports = new AtivoController();