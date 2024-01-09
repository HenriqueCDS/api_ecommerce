'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkInsert('Produtos', [ {
          nome: 'Adidas forum low',
          img: 'https://images.unsplash.com/photo-1620794341491-76be6eeb6946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=694&q=80',
          preco: 99.99 
      },
      {
        nome: 'Air Jordan 1 Low',
        img: 'https://images.unsplash.com/photo-1626466368754-f1c67d680345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80',
        preco: 119.99
      },
      {
        nome: 'CLYDE OG"',
        img: 'https://images.unsplash.com/photo-1620794341491-76be6eeb6946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=694&q=80',
        preco: 299.99 
      },
      {
        nome: 'Air max 270"',
        img: 'https://images.unsplash.com/photo-1562613521-6b5293e5b0ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        preco: 399.99 
      }
      ], {});
 
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('enderecos', null, {});
  
  }
};
