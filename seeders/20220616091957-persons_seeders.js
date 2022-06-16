"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "persons",
      [
        {
          uuid: uuidv4(),
          name: "Rifqoh Wasilah",
          address: "Pamekasan",
          createdAt: new Date(),
          updatedAt: new Date(),
          programId: 1,
        },
        {
          uuid: uuidv4(),
          name: "Mutawakkil Alallah",
          address: "Sumenep",
          createdAt: new Date(),
          updatedAt: new Date(),
          programId: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("persons", null, {});
  },
};
