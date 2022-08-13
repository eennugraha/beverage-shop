const { category } = require("../models");

class CategoryController {
  static async getCategories(req, res) {
    try {
      let categories = await category.findAll();
      res.json(categories);
    } catch (err) {
      res.json(err);
    }
  }

  static createPage(req, res) {}

  static async create(req, res) {}

  static editPage(req, res) {}

  static async edit(req, res) {}

  static async delete(req, res) {}
}

module.exports = CategoryController;
