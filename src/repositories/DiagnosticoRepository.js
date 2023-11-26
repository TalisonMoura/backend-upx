const { Diagnostico } = require('../database/models/Diagnostico');

class DiagnosticoRepository {
    /**
     * @param ativoId
     * @param userId
     * @param report
     * @param materials
     * @returns {Promise<Model<any, TModelAttributes>>}
     */
    
    async registerDiagnostico(ativoId, userId, report, materials) {

        return await Diagnostico.create({
            ativoId,
            userId,
            report,
            materials
        });
    }

    async getAllDisgnostico(ativoId) 
    {
        const diagnosticos =  await Diagnostico.findAll({
            attributes: [
                [Diagnostico.sequelize.fn('DISTINC', Diagnostico.sequelize.col('ativoId')), 'ativoId']
            ],
            where: ativoId ? { ativoId } : {},
            raw: true,
        });
        return diagnosticos.map((x) => x.ativoId)
    }
}

module.exports = new DiagnosticoRepository();