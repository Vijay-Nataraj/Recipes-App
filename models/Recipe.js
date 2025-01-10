const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  Title: String,
  Ingredients: [String],
  Instructions: String,
});

module.exports = mongoose.model("Recipe", recipeSchema, "recipes");
