const { getLiquor } = require('../../models/liquor.model');

async function getLiquorsData(req, res) {
  return res.status(200).json(await getLiquor());
}

module.exports = {
    getLiquorsData,
};