

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [
      {
        email: 'AnaSouza@gmail.com',
        fistName: 'Ana',
        lastName: 'Souza ',
        password:'lfmask;lfnakl;nf',
        ativo: true,
        isAdmin: false,
        registerDate: '01/10/2003',
        endereco_id:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Roberto@gmail.com',
        fistName: 'Roberto',
        lastName: 'silvas',
        password:'senha123',
        ativo: true,
        isAdmin: false,
        registerDate: '17/09/2003',
        endereco_id:1,
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
        endereco_id:1,
        createdAt: new Date(),
        updatedAt: new Date(),

      }

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {})
  }
};
