"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "programs",
      [
        {
          title: "Web Developer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "IOS Developer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("programs", null, {});
  },
};
