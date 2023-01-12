const { addUserToDatabase } = require('../../models/users.model');

async function addUserData(req, res) {
  return res.status(200).json(await addUserToDatabase(req));
}

module.exports = {
  addUserData,
};