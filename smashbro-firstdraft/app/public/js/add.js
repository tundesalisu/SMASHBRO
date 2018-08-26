// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// When user clicks add-btn
$("#chirp-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newChirp = {
    TITLE: $("#TITLE-box").val().trim(),
    ADDRESS: $("#ADDRESS-box").val().trim(),
    LOCATION: $("#LOCATION-box").val().trim(),
    VENUE: $("#VENUE-box").val().trim(),
    TIME: $("#INFO-box").val().trim(),
    INFO: $("#CATEGORY-box").val().trim(),
    CATEGORY: $("#LINK-box").val().trim(),
    LINK: $("#IMAGE-box").val().trim(),
    VIDEO: $("#VIDEO-box").val().trim()
   
  };

  console.log(newChirp);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newChirp)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + newChirp.TITLE + " NEWLY ENTERED </p>");
      row.append("<p>" + newChirp.ADDRESS + " NEWLY ENTERED </p>");
      row.append("<p>" + newChirp.LOCATION + " NEWLY ENTERED </p>");
      row.append("<p>" + newChirp.VENUE + " NEWLY ENTERED </p>");
      row.append("<p>" + newChirp.TIME + " NEWLY ENTERED </p>");
      row.append("<p>" + newChirp.INFO + " NEWLY ENTERED </p>");
      row.append("<p>" + newChirp.CATEGORY + " NEWLY ENTERED </p>");
      row.append("<p>" + newChirp.LINK + " NEWLY ENTERED </p>");
      row.append("<p>" + newChirp.IMAGE + " NEWLY ENTERED </p>");
      row.append("<p>" + newChirp.VIDEO + " NEWLY ENTERED </p>");
      

      $("#chirp-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#TITLE-box").val("")
  $("#ADDRESS-box").val("")
  $("#LOCATION-box").val("")
  $("#VENUE-box").val("")
  $("#INFO-box").val("")
  $("#CATEGORY-box").val("")
  $("#LINK-box").val("")
  $("#IMAGE-box").val("")
  $("#VIDEO-box").val("")




});