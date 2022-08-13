const { Router } = require("express");
const drinkRoute = Router();
const { DrinkController } = require("../controllers");

drinkRoute.get("/", DrinkController.getDrinks);
drinkRoute.get("/create", DrinkController.createPage);
drinkRoute.post("/create", DrinkController.create);
drinkRoute.get("/edit/:id", DrinkController.editPage);
drinkRoute.post("/edit/:id", DrinkController.edit);
drinkRoute.get("/delete/:id", DrinkController.delete);

drinkRoute.get("/:id/ingredients", DrinkController.getDrinkIngredients);

module.exports = drinkRoute;
