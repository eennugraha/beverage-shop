const { ingredient, mix } = require("../models");

class IngredientController {
  static async getIngredients(req, res) {
    try {
      let ingredients = await ingredient.findAll();
      res.json(ingredients);
    } catch (err) {
      res.json(err);
    }
  }

  static addPage(req, res) {
    res.json({
      message: "Add Ingredient Page",
    });
  }

  // prettier-ignore
  static async add(req, res) {
    try {
      const { name, stock } = req.body;
      let result = await ingredient.create({
        name, stock
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static editPage(req, res) {
    res.json({
      message: "Edit Ingredient Page",
    });
  }

  // prettier-ignore
  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { name, stock } = req.body;
      let result = await ingredient.update(
        {
          name, stock
        },
        { where: { id } }
      );
      result[0] === 1
        ? res.json({ message: `Ingredient with id: ${id} has been updated!` })
        : res.json({ message: `Ingredient with id: ${id} is not found!` });
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let resultIngredient = await ingredient.destroy({
        where: { id },
      });
      // let resultMix = await mix.destroy({
      //   where: { ingredientId: id },
      // });
      resultIngredient === 1
        ? res.json({ message: `Ingredient with id: ${id} has been deleted!` })
        : res.json({ message: `Ingredient with id: ${id} is not found!` });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = IngredientController;
