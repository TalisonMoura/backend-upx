'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        id: "f2a8e1d9-1b8c-4a75-9f3d-2c7fe6e1a5d3",
        name: "Alice Johnson",
        password: await bcrypt.hash("Upx1234*", 8),
        cpf: "12345678901",
        email: "alice.johnson@example.com",
        image: null,
        user_types_id: "3ba853b1-febc-4d4c-8531-df3daecc9d17",
        createdAt: new Date(),
        updatedAt: new Date(),
        last_date_acess: new Date()
      },
      {
        id: "c9d8a7e6-4a1f-4ea1-bdd8-86512c8b14a3",
        name: "Bob Smith",
        password: await bcrypt.hash("Upx1234*", 8),
        cpf: "98765432109",
        email: "bob.smith@example.com",
        image: null,
        user_types_id: "3ba853b1-febc-4d4c-8531-df3daecc9d17",
        createdAt: new Date(),
        updatedAt: new Date(),
        last_date_acess: new Date()
      },
      {
        id: "e5f3c9d2-b1e2-4b8a-b1c1-5a3f8e6c9d2b",
        name: "Charlie Brown",
        password: await bcrypt.hash("Upx1234*", 8),
        cpf: "11223344556",
        email: "charlie.brown@example.com",
        image: null,
        user_types_id: "3ba853b1-febc-4d4c-8531-df3daecc9d17",
        createdAt: new Date(),
        updatedAt: new Date(),
        last_date_acess: new Date()
      },
      {
        id: "a8d9e5a1-2b1e-4b8a-b1c1-5a3f8e6c9d2b",
        name: "Diana Miller",
        password: await bcrypt.hash("Upx1234*", 8),
        cpf: "99887766554",
        email: "diana.miller@example.com",
        image: null,
        user_types_id: "3ba853b1-febc-4d4c-8531-df3daecc9d17",
        createdAt: new Date(),
        updatedAt: new Date(),
        last_date_acess: new Date()
      },
      {
        id: "959f4a1c-d0ef-40b1-80de-a567549a1eb3",
        name: "Elijah Davis",
        password: await bcrypt.hash("Upx1234*", 8),
        cpf: "76543210987",
        email: "elijah.davis@example.com",
        image: null,
        user_types_id: "3ba853b1-febc-4d4c-8531-df3daecc9d17",
        createdAt: new Date(),
        updatedAt: new Date(),
        last_date_acess: new Date()
      },
      {
        id: "1e2b8c5a-1d9e-4b8a-b1c1-5a3f8e6c9d2b",
        name: "Fiona White",
        password: await bcrypt.hash("Upx1234*", 8),
        cpf: "54321098765",
        email: "fiona.white@example.com",
        image: null,
        user_types_id: "3ba853b1-febc-4d4c-8531-df3daecc9d17",
        createdAt: new Date(),
        updatedAt: new Date(),
        last_date_acess: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {truncate: true});
  }
};
