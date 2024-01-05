'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkInsert('enderecos', [ {
        cep: '14521412-3',
        longradouro: 'Rua Ana Maria Braga',
        bairro: 'Souza leite',
        numero:'424',
        cidade: 'São Paulo',
        estado: 'São Paulo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cep: '14532412-3',
        longradouro: 'Rua Ana Maria Brega',
        bairro: 'osasco',
        numero:'241',
        cidade: 'São Paulo',
        estado: 'São Paulo',
        createdAt: new Date(),
        updatedAt: new Date()

      }
      ], {});
 
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('enderecos', null, {});
  
  }
};
