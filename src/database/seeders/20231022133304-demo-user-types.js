'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('UserTypes', [
            {
                description: 'user',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                description: 'admin',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                description: 'super_admin',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('UserTypes', null, {truncate: true});
    }
};