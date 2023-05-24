// Server start-up dependencies
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

// Database
const db = require("./db"); // add in the DB

// Const Define routes

const root = require("./routes/root");
  
// Define first route and server response
module.exports = function application (ENV) {
  
  app.use(bodyparser.json()); // Find clear reason why this is being used

  app.use('/', root(db));

  app.close = function() {
    return db.end();
  }

  return app;
}
