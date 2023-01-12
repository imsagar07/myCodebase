const express = require('express');

const {
    getLiquorsData,
} = require('./getliquor.controller');

const getLiquorData = express.Router();

getLiquorData.get('/', getLiquorsData);

module.exports = getLiquorData;