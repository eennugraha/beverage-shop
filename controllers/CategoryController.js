const { category, drink } = require("../models");

class CategoryController {
  static async getCategories(req, res) {
    try {
      let categories = await category.findAll({
        order: [["id", "asc"]],
      });
      res.render("category.ejs", { categories });
    } catch (err) {
      res.json(err);
    }
  }

  static async addPage(req, res) {
    try {
      res.render("categoryAddPage.ejs");
    } catch (err) {
      res.json(err);
    }
  }

  static async add(req, res) {
    try {
      const { name } = req.body;
      let result = await category.create({
        name,
      });
      res.redirect("/categories");
    } catch (err) {
      res.json(err);
    }
  }

  static async editPage(req, res) {
    try {
      const id = +req.params.id;
      const result = await category.findByPk(id);
      res.render("categoryEditPage.ejs", { result });
    } catch (err) {
      res.json(err);
    }
  }

  // prettier-ignore
  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { name } = req.body;
      let result = await category.update({
          name
        },
        { where: { id } }
      );
      res.redirect('/categories')
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let resultCategory = await category.destroy({
        where: { id },
      });
      // let resultDrink = await drink.destroy({
      //   where: { categoryId: id },
      // });
      res.redirect("/categories");
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = CategoryController;
