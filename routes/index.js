const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  // res.json({
  //   message: "Beverage Shop",
  // });
  res.render("index.ejs");
});

const ingredientRoutes = require("./ingredient");
const drinkRoutes = require("./drink");
const mixRoutes = require("./mix");
const categoryRoutes = require("./category");

route.use("/ingredients", ingredientRoutes);
route.use("/drinks", drinkRoutes);
route.use("/mixes", mixRoutes);
route.use("/categories", categoryRoutes);

module.exports = route;
