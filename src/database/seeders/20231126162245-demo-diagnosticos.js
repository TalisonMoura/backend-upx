'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Diagnosticos', [
        {
          id: '102bbd0e-55ce-4d44-8631-3ac4b943134d',
          ativoId: 'b3f5e9d7-4c8a-1e2b-8a2c-5bafce9d7a1b',
          userId: 'e5f3c9d2-b1e2-4b8a-b1c1-5a3f8e6c9d2b',
          report: 'executar reparos daqui 1 semana',
          materials: [
            { quantity: 10, name: 'bomba de vaso' },
            { quantity: 20, name: 'bomba de bico' },
            { quantity: 30, name: 'bomba de vela' },
            { quantity: 40, name: 'bomba de teto' }
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 'e0e65059-ed84-4c43-91a8-a5f2b7589583',
          ativoId: 'b3f5e9d7-4c8a-1e2b-8a2c-5bafce9d7a1b',
          userId: 'e5f3c9d2-b1e2-4b8a-b1c1-5a3f8e6c9d2b',
          report: 'executar reparos daqui 1 semana',
          materials: [
            { quantity: 70, name: 'viação cipo' },
            { quantity: 20, name: 'viação cipo' },
            { quantity: 40, name: 'viação cipo' },
            { quantity: 30, name: 'viação cipo' }
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '8eaeab5e-f6e6-48a6-8e22-84ce7b785407',
          ativoId: 'e3da7a0b-2d6f-4157-b7ac-df6b733737bd',
          userId: 'c9d8a7e6-4a1f-4ea1-bdd8-86512c8b14a3',
          report: 'bomba com óleo obsoleto',
          materials: [
            { quantity: 15, name: 'the noite' },
            { quantity: 35, name: 'the noite' },
            { quantity: 40, name: 'the noite' },
            { quantity: 16, name: 'the noite' }
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '8b2bdd5c-b28e-42bd-8fe0-7aa0b675fd61',
          ativoId: 'e3da7a0b-2d6f-4157-b7ac-df6b733737bd',
          userId: 'c9d8a7e6-4a1f-4ea1-bdd8-86512c8b14a3',
          report: 'falta de gaz nos compartimentos hidráulicos',
          materials: [
            { quantity: 21, name: 'bancada democratica' },
            { quantity: 18, name: 'bancada democratica' },
            { quantity: 34, name: 'bancada democratica' },
            { quantity: 27, name: 'bancada democratica' }
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 'b31cf194-1bb8-4ad1-839b-9967f3b47a89',
          ativoId: 'f6e2a8d9-1b8c-4a75-9f3d-2c7fe6e1a5d3',
          userId: '1e2b8c5a-1d9e-4b8a-b1c1-5a3f8e6c9d2b',
          report: 'propulsores danificados',
          materials: [
            { quantity: 17, name: 'bomba de injeção' },
            { quantity: 26, name: 'bomba de injeção' },
            { quantity: 14, name: 'bomba de injeção' },
            { quantity: 32, name: 'bomba de injeção' }
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Diagnosticos', null, {truncate: true});
  }
};
