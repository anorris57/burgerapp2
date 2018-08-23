'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {return queryInterface.bulkInsert('burgers', [
    {name: "Avocado Swiss Melt Burger", devoured: false, createdAt: new Date(), updatedAt: new Date()},
    {name: "Tuna Dill Burger", devoured: false, createdAt: new Date(), updatedAt: new Date()},
    {name: "Spam Cheddar Melt Burger", devoured: false, createdAt: new Date(), updatedAt: new Date()},
    {name: "Pink Lady Apple Burger", devoured: false, createdAt: new Date(), updatedAt: new Date()}
  ], {});

 },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
