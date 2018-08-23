'use strict';
module.exports = (sequelize, DataTypes) => {
  var Burger = sequelize.define('Burger', {
    name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  }, {});
  Burger.associate = function(models) {
    // associations can be defined here
  };
  return Burger;
};