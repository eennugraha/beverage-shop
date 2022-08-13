const { Router } = require("express");
const ingredientRoute = Router();
const { IngredientController } = require("../controllers");

ingredientRoute.get("/", IngredientController.getIngredients);
ingredientRoute.get("/add", IngredientController.addPage);
ingredientRoute.post("/add", IngredientController.add);
ingredientRoute.get("/edit/:id", IngredientController.editPage);
ingredientRoute.post("/edit/:id", IngredientController.edit);
ingredientRoute.get("/delete/:id", IngredientController.delete);

module.exports = ingredientRoute;
