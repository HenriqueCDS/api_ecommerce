

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [
      {
        email: 'AnaSouza@gmail.com',
        primeiroNome: 'Ana',
        sobreNome: 'Souza ',
        senha:'lfmask;lfnakl;nf',
        ativo: true,
        isAdmin: false,
        registerDate: '01/10/2003',
        endereco_id:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Roberto@gmail.com',
        primeiroNome: 'Roberto',
        sobreNome: 'silvas',
        senha:'senha123',
        ativo: true,
        isAdmin: false,
        registerDate: '17/09/2003',
        endereco_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Cesar@gmail.com',
        primeiroNome: 'Cesar',
        sobreNome: 'Louros',
        senha:'4342424243423',
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
