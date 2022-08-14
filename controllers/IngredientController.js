const { ingredient, mix } = require("../models");

class IngredientController {
  static async getIngredients(req, res) {
    try {
      let ingredients = await ingredient.findAll({
        order: [["id", "asc"]],
      });
      res.render("ingredient.ejs", { ingredients });
    } catch (err) {
      res.json(err);
    }
  }

  static async addPage(req, res) {
    try {
      const ingredients = await ingredient.findAll();
      res.render("ingredientAddPage.ejs", { ingredients });
    } catch (err) {
      res.json(err);
    }
  }

  // prettier-ignore
  static async add(req, res) {
    try {
      const { name, stock } = req.body;
      let result = await ingredient.create({
        name, stock
      });
      res.redirect('/ingredients')
    } catch (err) {
      res.json(err);
    }
  }

  static async editPage(req, res) {
    try {
      const id = +req.params.id;
      const result = await ingredient.findByPk(id);
      res.render("ingredientEditPage.ejs", { result });
    } catch (err) {
      res.json(err);
    }
  }

  // prettier-ignore
  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { name, stock } = req.body;
      let result = await ingredient.update({
          name, stock
        },
        { where: { id } }
      );
      res.redirect('/ingredients')
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
      res.redirect("/ingredients");
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = IngredientController;
