const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Program = sequelize.define(
    "Program",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "programs",
      timestamp: true,
    }
  );
  return Program;
};
