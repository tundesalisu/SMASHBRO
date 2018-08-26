// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Chirp = sequelize.define("smashtables", {
 // routeName: Sequelize.STRING,
  TITLE: Sequelize.STRING,
  ADDRESS: Sequelize.STRING,
  LOCATION: Sequelize.STRING,
  VENUE: Sequelize.STRING,
  TIME: Sequelize.STRING,
  INFO: Sequelize.STRING,
  CATEGORY: Sequelize.STRING,
  LINK: Sequelize.STRING,
  IMAGE: Sequelize.STRING,
  VIDEO: Sequelize.STRING
});

// Syncs with DB
Chirp.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Chirp;
