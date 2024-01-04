'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Admins', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    })
  },
  down: (queryInterface) => {
    return queryInterface.removeColumn('Admins', 'deletedAt')
  }
};
