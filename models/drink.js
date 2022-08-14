"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class drink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      drink.belongsTo(models.category, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      drink.belongsToMany(models.ingredient, {
        through: models.mix,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  drink.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "drink",
    }
  );
  return drink;
};
