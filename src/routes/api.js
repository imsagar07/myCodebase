const express = require('express');

// const planetsRouter = require('./planets/planets.router');
const addUserRouter = require('./adduser/adduser.router');
const getLiquor = require('./getLiquor/getliquor.router');

const api = express.Router();

api.use('/addUser', addUserRouter);
api.use('/getliquor', getLiquor);
// api.use('/launches', launchesRouter);

module.exports = api;