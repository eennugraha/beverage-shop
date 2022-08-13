const { Router } = require("express");
const drinkRoute = Router();
const { DrinkController } = require("../controllers");

drinkRoute.get("/", DrinkController.getDrinks);
drinkRoute.get("/add", DrinkController.createPage);
drinkRoute.post("/add", DrinkController.create);
drinkRoute.get("/edit/:id", DrinkController.editPage);
drinkRoute.post("/edit/:id", DrinkController.edit);
drinkRoute.get("/delete/:id", DrinkController.delete);

module.exports = drinkRoute;
