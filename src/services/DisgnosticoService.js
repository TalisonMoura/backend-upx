const { DiagnosticoRepository } = require('../repositories/DiagnosticoRepository');
const ResponseTrait = require('../traits/ResponseTrait');

class DiagnosticoService extends ResponseTrait 
{
    /**
     * @param ativoId
     * @param userId
     * @param report
     * @param materials
     * @returns {Promise<{data: {ok: boolean, message: string}, status: number}>}
     */

    async createDiagnostico(ativoId, userId, report, materials)
    {
        if (!ativoId || !userId || !report || !materials) 
        {
            return this.responseRequiredFields();
        }

        await DiagnosticoRepository.createDiagnostico(ativoId, userId, report, materials)
        return this.responseSuccessCreated('Diagnostico criado com sucesso');
    }
}

module.exports = new DiagnosticoService();