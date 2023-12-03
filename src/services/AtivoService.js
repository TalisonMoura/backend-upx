const AtivoRepository  = require('../repositories/AtivoRepository')
const ResponseTrait = require('../traits/ResponseTrait');

class AtivoService extends ResponseTrait 
{
    /**
     * @param userId
     * @param name
     * @param numserie
     * @param manufacturer
     * @param tipo
     * @param model
     * @param department
     * @param location
     * @param manufacturingDate
     * @returns {Promise<{data: {ok: boolean, message: string}, status: number}>}
     */

    async createAtivo(userId, name, numserie, manufacturer, tipo, model, department, location, manufacturingDate)
    {
        if (!userId || !name || !numserie || !manufacturer || !tipo || !model || !department || !manufacturingDate) 
        {
            return this.responseRequiredFields();
        }

        await AtivoRepository.registerAtivo(userId, name, numserie, manufacturer, tipo, model, department, location, manufacturingDate);
        return this.responseSuccessCreated('Ativo criado com sucesso');
    }

    async getAtivoById(id)
    {
        if(!id)
        {
            return this.responseRequiredFields();
        }
        
        const result = await AtivoRepository.getAtivoById(id);
        if(result === null)
        {
            return this.responseAtivoNotFound();
        }
        
        return this.successResponse(result);
    }
}

module.exports = new AtivoService();