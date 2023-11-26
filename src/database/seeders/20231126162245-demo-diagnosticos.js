'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Diagnosticos', [
        {
          id: '3ba853b1-febc-4d4c-8531-df3daecc9d17',
          ativoId: 'b3f5e9d7-4c8a-1e2b-8a2c-5bafce9d7a1b',
          userId: 'e5f3c9d2-b1e2-4b8a-b1c1-5a3f8e6c9d2b',
          report: 'executar reparos daqui 1 semana',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '3ba853b1-febc-4d4c-8531-df3daecc9d17',
          ativoId: 'b3f5e9d7-4c8a-1e2b-8a2c-5bafce9d7a1b',
          userId: 'e5f3c9d2-b1e2-4b8a-b1c1-5a3f8e6c9d2b',
          report: 'executar reparos daqui 1 semana',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '3ba853b1-febc-4d4c-8531-df3daecc9d17',
          ativoId: 'e3da7a0b-2d6f-4157-b7ac-df6b733737bd',
          userId: 'c9d8a7e6-4a1f-4ea1-bdd8-86512c8b14a3',
          report: 'bomba com óleo obsoleto',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '3ba853b1-febc-4d4c-8531-df3daecc9d17',
          ativoId: 'e3da7a0b-2d6f-4157-b7ac-df6b733737bd',
          userId: 'c9d8a7e6-4a1f-4ea1-bdd8-86512c8b14a3',
          report: 'falta de gaz nos compartimentos hidráulicos',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '3ba853b1-febc-4d4c-8531-df3daecc9d17',
          ativoId: 'f6e2a8d9-1b8c-4a75-9f3d-2c7fe6e1a5d3',
          userId: '1e2b8c5a-1d9e-4b8a-b1c1-5a3f8e6c9d2b',
          report: 'propulsores danificados',
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Diagnosticos', null, {truncate: true});
  }
};
