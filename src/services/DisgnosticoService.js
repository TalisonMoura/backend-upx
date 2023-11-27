const DiagnosticoRepository = require('../repositories/DiagnosticoRepository');
const MessageBrokerService = require('./MessageBrokerService');
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
        if (!ativoId || !userId || !report) 
        {
            return this.responseRequiredFields();
        }

        if(materials != null)
        {
            await MessageBrokerService.sendMessageToQueue(materials);
            await MessageBrokerService.receivedAndSendEmail();
        }

        await DiagnosticoRepository.registerDiagnostico(ativoId, userId, report, materials);
        return this.responseSuccessCreated('Diagnostico criado com sucesso');
    }

    async getAllDiagnostico(ativoId)
    {
        if(!ativoId)
        {
            return this.responseRequiredFields();
        }

        const result = DiagnosticoRepository.getAllDiagnostico(ativoId)
        if (result === null) 
        {
            return this.responseDiagnosticoNotFound();
        }

        return this.successResponse(result);
    }
}

module.exports = new DiagnosticoService();