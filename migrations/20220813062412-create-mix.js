"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("mixes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      secondId: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      drinkId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: "drinks",
        //   key: "id",
        //   onDelete: "CASCADE",
        //   onUpdate: "CASCADE",
        // },
      },
      ingredientId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: "ingredients",
        //   key: "id",
        //   onDelete: "CASCADE",
        //   onUpdate: "CASCADE",
        // },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("mixes");
  },
};
