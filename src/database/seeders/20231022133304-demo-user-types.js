'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('UserTypes', [
            {
                id: '3ba853b1-febc-4d4c-8531-df3daecc9d17',
                description: 'user',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: '02f5922a-508d-47e6-a6e9-963434469b0a',
                description: 'admin',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: '375081fc-1b18-42db-aeaa-e23950c693c2',
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