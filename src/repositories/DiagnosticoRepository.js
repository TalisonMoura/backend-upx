const { Diagnostico } = require('../database/models');

class DiagnosticoRepository {
    /**
     * @param ativoId
     * @param userId
     * @param report
     * @param materials
     * @returns {Promise<Model<any, TModelAttributes>>}
     */
    async createDiagnostico(ativoId, userId, report, materials) {

        return await Diagnostico.create({
            ativoId,
            userId,
            report,
            materials
        });
    }
}

module.exports = new DiagnosticoRepository();