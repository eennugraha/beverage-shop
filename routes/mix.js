const { Router } = require("express");
const mixRoute = Router();
const { MixController } = require("../controllers");

mixRoute.get("/", MixController.getMixes);
mixRoute.get("/add", MixController.addPage);
mixRoute.post("/add", MixController.add);
mixRoute.get("/edit/:dId/:iId", MixController.editPage);
mixRoute.post("/edit/:dId/:iId", MixController.edit);
mixRoute.get("/delete/:dId/:iId", MixController.delete);

module.exports = mixRoute;
