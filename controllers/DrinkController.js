const { drink, mix, ingredient } = require("../models");

class DrinkController {
  static async getDrinks(req, res) {
    try {
      let drinks = await drink.findAll();
      res.json(drinks);
    } catch (err) {
      res.json(err);
    }
  }

  static createPage(req, res) {
    res.json({
      message: "Create Drink Page",
    });
  }

  // prettier-ignore
  static async create(req, res) {
    try {
      const { name, price, categoryId } = req.body;
      let result = await drink.create({
        name, price, categoryId
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static editPage(req, res) {
    res.json({
      message: "Edit Drink Page",
    });
  }

  // prettier-ignore
  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { name, price, categoryId } = req.body;
      let result = await drink.update({
          name, price, categoryId
        },
        { where: { id } }
      );
      result[0] === 1
        ? res.json({ message: `Drink with id: ${id} has been updated!` })
        : res.json({ message: `Drink with id: ${id} is not found!` });
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let resultDrink = await drink.destroy({
        where: { id },
      });
      // let resultMix = await mix.destroy({
      //   where: { ingredientId: id },
      // });
      resultDrink === 1
        ? res.json({ message: `Ingredient with id: ${id} has been deleted!` })
        : res.json({ message: `Ingredient with id: ${id} is not found!` });
    } catch (err) {
      res.json(err);
    }
  }

  static async getDrinkIngredients(req, res) {
    try {
      const id = +req.params.id;

      let result = await mix.findAll({
        where: {
          drinkId: id,
        },
        include: [drink, ingredient],
      });

      let ingredientsOfDrink = result.map((element) => {
        return [element.ingredient.dataValues, element.amount];
      });

      let resultList = {
        ...result[0].drink.dataValues,
        ingredientsOfDrink,
      };

      // console.log(resultList.ingredientsOfDrink);
      res.json(resultList);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = DrinkController;
