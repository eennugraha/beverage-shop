const { drink, mix, ingredient, category } = require("../models");

class DrinkController {
  static async getDrinks(req, res) {
    try {
      let drinks = await drink.findAll({
        include: [category],
        order: [["id", "asc"]],
      });
      res.render("drink.ejs", { drinks });
    } catch (err) {
      res.json(err);
    }
  }

  static async createPage(req, res) {
    try {
      const categories = await category.findAll();
      res.render("drinkCreatePage.ejs", { value: null, categories });
    } catch (err) {
      res.json(err);
    }
  }

  // prettier-ignore
  static async create(req, res) {
    try {
      const { name, price, categoryId } = req.body;
      let result = await drink.create({
        name, price, categoryId
      });
      res.redirect('/drinks');
    } catch (err) {
      res.json(err);
    }
  }

  static async editPage(req, res) {
    try {
      const id = +req.params.id;
      const result = await drink.findByPk(id);
      const categories = await category.findAll();
      res.render("drinkEditPage.ejs", { result, categories });
    } catch (err) {
      res.json(err);
    }
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
      res.redirect('/drinks');
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
      let resultMix = await mix.destroy({
        where: { drinkId: id },
      });

      res.redirect("/drinks");
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
      // res.json(ingredientsOfDrink);
      let resultList = {
        ...result[0].drink.dataValues,
        ingredientsOfDrink,
      };

      // res.render("index.ejs");

      // const tes = Object.keys(ingredientsOfDrink).length;
      // res.json(tes);

      // console.log(resultList.ingredientsOfDrink);
      // res.json(resultList);
      res.render("drinkIngredients.ejs", { ingredientsOfDrink });
      // console.log(resultList);
      // res.render("drinkIngredients.ejs", { resultList });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = DrinkController;
