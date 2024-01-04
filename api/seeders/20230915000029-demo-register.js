'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'AnaSouza@gmail.com',
        fistName: 'Ana',
        lastName: 'Souza ',
        password:'lfmask;lfnakl;nf',
        ativo: true,
        isAdmin: true,
        registerDate: '01/10/2003',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Roberto@gmail.com',
        fistName: 'Roberto',
        lastName: 'silvas',
        password:'senha123',
        ativo: true,
        isAdmin: true,
        registerDate: '17/09/2003',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Cesar@gmail.com',
        fistName: 'Cesar',
        lastName: 'Louros',
        password:'4342424243423',
        ativo: true,
        isAdmin: true,
        registerDate: '07/09/2010',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
