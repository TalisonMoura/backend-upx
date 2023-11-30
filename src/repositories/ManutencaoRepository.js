const { Manutencao } = require('../database/models');
const { Op } = require("sequelize");

class ManutencaoRepository {
    /**
     * @param ativoId
     * @param userId
     * @param report
     * @returns {Promise<Model<any, TModelAttributes>>}
     */
    async registerManutencao(ativoId, userId, report) 
    {
        return await Manutencao.create({
            ativoId,
            userId,
            report
        });
    }

    async getAllManutencao(ativoId) 
    {
        return await Manutencao.findAll({
            where: { 
                ativoId: {
                    [Op.eq]: ativoId
                }
            }
        });
    }
}

module.exports = new ManutencaoRepository();