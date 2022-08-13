const { Router } = require("express");
const categoryRoute = Router();
const { CategoryController } = require("../controllers");

categoryRoute.get("/", CategoryController.getCategories);
categoryRoute.get("/add", CategoryController.addPage);
categoryRoute.post("/add", CategoryController.add);
categoryRoute.get("/edit/:id", CategoryController.editPage);
categoryRoute.post("/edit/:id", CategoryController.edit);
categoryRoute.get("/delete/:id", CategoryController.delete);

module.exports = categoryRoute;
