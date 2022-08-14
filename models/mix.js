"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mix extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      mix.belongsTo(models.ingredient, {
        foreignKey: "ingredientId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      mix.belongsTo(models.drink, {
        foreignKey: "drinkId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  mix.init(
    {
      amount: DataTypes.INTEGER,
      drinkId: DataTypes.INTEGER,
      ingredientId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "mix",
    }
  );
  return mix;
};
