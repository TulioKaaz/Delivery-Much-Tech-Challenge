const express = require('express');

const routes = new express.Router();

routes.get('/recipes', (req, res) => res.json('recipe'));

module.exports = routes;
