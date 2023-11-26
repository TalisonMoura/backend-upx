const { Manutencao } = require('../database/models/Manutencao');

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
        const manutencoes =  await Manutencao.findAll({
            attributes: [
                [Manutencao.sequelize.fn('DISTINC', Manutencao.sequelize.col('ativoId')), 'ativoId']
            ],
            where: ativoId ? { ativoId } : {},
            raw: true,
        });
        return manutencoes.map((x) => x.ativoId)
    }
}

module.exports = new ManutencaoRepository();