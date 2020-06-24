const express = require('express');

const findRecipesController = require('./controller/findRecipesController');

const routes = new express.Router();

routes.get('/recipes', findRecipesController.recipeList);

module.exports = routes;
