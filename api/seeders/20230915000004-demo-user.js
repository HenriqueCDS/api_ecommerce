module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [
			{
				email: 'Ana Souza',
				password: 'gkanmsgklnmsklganm',
				ativo: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
      {
				email: 'Robertin Meireles',
				password: 'gkanmsgklnmsklganm',
				ativo: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
      {
				email: 'Cesar Souza',
				password: 'gkanmsgklnmsklganm',
				ativo: true,
				createdAt: new Date(),
				updatedAt: new Date()
			}
     
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {})
  }
};