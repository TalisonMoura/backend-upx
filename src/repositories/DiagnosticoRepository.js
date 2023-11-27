const { Diagnostico } = require('../database/models');
const { Op } = require("sequelize");


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

    async getAllDiagnostico(ativoId) 
    {
        return await Diagnostico.findAll({
            where: { 
                ativoId: {
                    [Op.eq]: ativoId
                }
            }
        });
    }
}

module.exports = new DiagnosticoRepository();