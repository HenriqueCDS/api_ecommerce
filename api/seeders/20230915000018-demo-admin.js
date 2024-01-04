'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Admins', [
			{
        AdminNome:'Ana Souza',
				email: 'AnaSouza@gmail.com',	
				ativo: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
      {
        AdminNome:'Robertin',
				email: 'Robertin@gmail.com',
				ativo: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
      {
        AdminNome:'Cesar Souza',
				email: 'CesarSouza@gmail.com',
				ativo: true,
				createdAt: new Date(),
				updatedAt: new Date()
			}
     
	], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Admin', null, {})
  }
};
