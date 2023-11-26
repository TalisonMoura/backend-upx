const ManutencaoRepository  = require('../repositories/ManutencaoRepository');
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

        await ManutencaoRepository.registerManutencao(ativoId, userId, report)
        return this.responseSuccessCreated('Manutenção criada com sucesso');
    }

    async getAllManutencao(ativoId)
    {
        if(!ativoId)
        {
            return this.responseRequiredFields();
        }

        const result = ManutencaoRepository.getAllDisgnostico(ativoId)
        if (result === null) 
        {
            return this.responseManutencaoNotFound();
        }
        return this.successResponse(result);
    }
}

module.exports = new ManutencaoService();
