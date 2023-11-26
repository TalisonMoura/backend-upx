'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Manutencaos', [
        {
          id: '7e7e7b17-c48f-4b08-aa36-95025e6c005e',
          ativoId: 'e3da7a0b-2d6f-4157-b7ac-df6b733737bd',
          userId: 'c9d8a7e6-4a1f-4ea1-bdd8-86512c8b14a3',
          report: 'testando',
          materials: 'bomba de injeção',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '5daf6908-f092-4637-805a-5adca4413f4b',
          ativoId: 'e3da7a0b-2d6f-4157-b7ac-df6b733737bd',
          userId: 'c9d8a7e6-4a1f-4ea1-bdd8-86512c8b14a3',
          report: 'testando',
          materials: 'bomba de injeção',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 'fe36a1aa-a0f8-485a-ba61-02141521a783',
          ativoId: 'b3f5e9d7-4c8a-1e2b-8a2c-5bafce9d7a1b',
          userId: 'e5f3c9d2-b1e2-4b8a-b1c1-5a3f8e6c9d2b',
          report: 'testando',
          materials: 'bomba de injeção',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '7e69031d-b08c-4c9f-b787-b3607cd4edba',
          ativoId: 'b3f5e9d7-4c8a-1e2b-8a2c-5bafce9d7a1b',
          userId: 'e5f3c9d2-b1e2-4b8a-b1c1-5a3f8e6c9d2b',
          report: 'testando',
          materials: 'bomba de injeção',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 'ead597db-f9b2-4394-ab52-460c033417e4',
          ativoId: 'f6e2a8d9-1b8c-4a75-9f3d-2c7fe6e1a5d3',
          userId: '1e2b8c5a-1d9e-4b8a-b1c1-5a3f8e6c9d2b',
          report: 'testando',
          materials: 'bomba de injeção',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '89768a62-53e3-40fa-a121-aa11005f0db8',
          ativoId: 'f6e2a8d9-1b8c-4a75-9f3d-2c7fe6e1a5d3',
          userId: '1e2b8c5a-1d9e-4b8a-b1c1-5a3f8e6c9d2b',
          report: 'testando',
          materials: 'bomba de injeção',
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Manutencaos', null, {truncate: true});
  }
};
