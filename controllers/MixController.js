const { mix, drink, ingredient } = require("../models");

class MixController {
  static async getMixes(req, res) {
    try {
      let mixes = await mix.findAll({
        include: [drink, ingredient],
        order: [["drinkId", "asc"]],
      });
      res.render("mix.ejs", { mixes });
    } catch (err) {
      res.json(err);
    }
  }

  static async addPage(req, res) {
    try {
      const drinks = await drink.findAll();
      const ingredients = await ingredient.findAll();
      res.render("mixAddPage.ejs", { value: null, drinks, ingredients });
    } catch (err) {
      res.json(err);
    }
  }

  // prettier-ignore
  static async add(req, res) {
    try {
      const { amount, drinkId, ingredientId } = req.body;
      let result = await mix.create({
        amount, drinkId, ingredientId
      });
      res.redirect('/mixes');
    } catch (err) {
      res.json(err);
    }
  }

  static async editPage(req, res) {
    try {
      const dId = +req.params.dId;
      const iId = +req.params.iId;
      const result = await mix.findOne({
        where: { drinkId: dId, ingredientId: iId },
      });
      const drinks = await drink.findAll();
      const ingredients = await ingredient.findAll();
      res.render("mixEditPage.ejs", { result, drinks, ingredients });
    } catch (err) {
      res.json(err);
    }
  }

  // prettier-ignore
  static async edit(req, res) {
    try {
      const dId = +req.params.dId;
      const iId = +req.params.iId;
      const { amount, drinkId, ingredientId } = req.body;
      let result = await mix.update({
        amount, drinkId, ingredientId
        },
        { where: { drinkId: dId, ingredientId: iId } }
      );
      res.redirect('/mixes')
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const dId = +req.params.dId;
      const iId = +req.params.iId;
      let resultMix = await mix.destroy({
        where: { drinkId: dId, ingredientId: iId },
      });
      res.redirect("/mixes");
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = MixController;
