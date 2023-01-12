const express = require('express');

const {
  addUserData,
} = require('./adduser.controller');

const addUserRouter = express.Router();

addUserRouter.post('/', addUserData);

module.exports = addUserRouter;