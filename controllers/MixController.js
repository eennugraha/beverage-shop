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

  static editPage(req, res) {
    res.json({
      message: "Edit Mix Page",
    });
  }

  // prettier-ignore
  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { amount, drinkId, ingredientId } = req.body;
      let result = await mix.update({
        amount, drinkId, ingredientId
        },
        { where: { id } }
      );
      result[0] === 1
        ? res.json({ message: `Mix with id: ${id} has been updated!` })
        : res.json({ message: `Mix with id: ${id} is not found!` });
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let resultMix = await mix.destroy({
        where: { id },
      });
      res.redirect("/mixes");
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = MixController;
