const { ManutencaoRepository } = require('../repositories/ManutencaoRepository');
const ResponseTrait = require('../traits/ResponseTrait');

class ManutencaoService extends ResponseTrait 
{
    /**
     * @param ativoId
     * @param userId
     * @param report
     * @returns {Promise<{data: {ok: boolean, message: string}, status: number}>}
     */

    async createManutencao(ativoId, userId, report)
    {
        if (!ativoId || !userId || !report) 
        {
            return this.responseRequiredFields();
        }

        await ManutencaoRepository.createDiagnostico(ativoId, userId, report)
        return this.responseSuccessCreated('Manutenção criada com sucesso');
    }
}

module.exports = new ManutencaoService();
