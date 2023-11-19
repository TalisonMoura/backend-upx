const { Ativo } = require('../database/models');

class AtivoRepository {
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
     * @returns {Promise<Model<any, TModelAttributes>>}
     */
    async createAtivo(userId, name, numserie, manufacturer, tipo, model, department, location, manufacturingDate) {

        return await Ativo.create({
            userId,
            name,
            numserie,
            manufacturer,
            tipo,
            model,
            department,
            location,
            manufacturingDate
        });
    }
}

module.exports = new AtivoRepository();