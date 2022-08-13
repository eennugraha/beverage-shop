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

  static addPage(req, res) {
    res.json({
      message: "Add Category Page",
    });
  }

  static async add(req, res) {
    try {
      const { name } = req.body;
      let result = await category.create({
        name,
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static editPage(req, res) {
    res.json({
      message: "Edit Category Page",
    });
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
      result[0] === 1
        ? res.json({ message: `Category with id: ${id} has been updated!` })
        : res.json({ message: `Category with id: ${id} is not found!` });
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
      // let resultMix = await mix.destroy({
      //   where: { ingredientId: id },
      // });
      resultCategory === 1
        ? res.json({ message: `Category with id: ${id} has been deleted!` })
        : res.json({ message: `Category with id: ${id} is not found!` });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = CategoryController;
