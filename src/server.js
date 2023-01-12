const http = require('http');

require('dotenv').config();

const app = require('./app');
const { mongoConnect } = require('./services/mongo');
// const { loadUsersDataAndSave } = require('./models/users.model');
// const { getLiquor } = require('./models/liquor.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  // await loadUsersDataAndSave();
  // await getLiquor();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
