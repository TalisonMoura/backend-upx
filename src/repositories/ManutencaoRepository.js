const { Manutencao } = require('../database/models');

class ManutencaoRepository {
    /**
     * @param ativoId
     * @param userId
     * @param report
     * @returns {Promise<Model<any, TModelAttributes>>}
     */
    async createManutencao(ativoId, userId, report) {

        return await Manutencao.create({
            ativoId,
            userId,
            report
        });
    }
}

module.exports = new ManutencaoRepository();