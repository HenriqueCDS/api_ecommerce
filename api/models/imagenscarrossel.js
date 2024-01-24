'use strict';
module.exports = (sequelize, DataTypes) => {
  const imagensCarrossel = sequelize.define('imagens_carrossels', {
    idProduto: DataTypes.INTEGER,
    img1: DataTypes.STRING,
    img2: DataTypes.STRING,
    img3: DataTypes.STRING,
    img4: DataTypes.STRING,
    img5: DataTypes.STRING
  }, {});
  imagensCarrossel.associate = function(models) {
    imagensCarrossel.belongsTo(models.Produtos, {
        foreignKey: 'idProduto',
        onDelete: 'CASCADE',
      })
    };
 
  return imagensCarrossel;
};