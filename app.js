const express = require("express");
const recipeRouter = require("./routes/recipeRoutes");

const app = express();

app.use(express.json());

app.use("/", recipeRouter);
module.exports = app;
