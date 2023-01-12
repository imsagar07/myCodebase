const express = require('express');

const {
  addLiquorData,
} = require('./addLiquor.controller');

const addLiquorRoute = express.Router();

addLiquorRoute.get('/', addLiquorData);

module.exports = addLiquorRoute;