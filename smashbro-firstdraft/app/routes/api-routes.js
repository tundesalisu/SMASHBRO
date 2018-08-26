// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Chirp = require("../models/chirp.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/:LOCAL?", function(req, res) {

      // If the user provides a specific character in the URL...
      if (req.params.LOCAL) {
        // Then display the JSON for ONLY that character.
        // (Note how we're using the ORM here to run our searches)
        Chirp.findAll({
          where: {
            LOCATION: req.params.LOCAL
          }
        }).then(function(result) {
          return res.json(result);
        });
      }
      else {
        // Otherwise...
        // Otherwise display the data for all of the characters.
        // (Note how we're using Sequelize here to run our searches)
        Chirp.findAll({}).then(function(result) {
          return res.json(result);
        });
      }
    });

  //"/api/:state"

  // Add a chirp
  app.post("/api/new", function(req, res) {
    var smashtables = req.body;
    console.log("Chirp Data:");
    console.log(req.body);

    var routeName = smashtables.LOCATION.replace(/\s+/g, "").toLowerCase();

    Chirp.create({
     //routeName: routeName,
      TITLE: ChirpTITLE,
      ADDRESS: ChirpADDRESS,
      LOCATION: ChirpLOCATION,
      VENUE: ChirpVENUE,
      TIME: ChirpTIME,
      INFO: ChirpINFO,
      CATEGORY: ChirpCATEGORY,
      LINK: ChirpLINK,
      IMAGE: ChirpIMAGE,
      VIDEO: Chirp.VIDEO
      
    });

  });

};