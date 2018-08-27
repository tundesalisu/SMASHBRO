// Code here handles queries for specific characters in the database
// In this case, the user submits a character's name... we then pass that character's name as a
// URL parameter. Our server then performs the search to grab that character from the Database.

// when user hits the search-btn
$("#search-btn").on("click", function() {
  // save the character they typed into the character-search input
  var searchedCharacter = $("#character-search")
    .val()
    .trim();

  // Using a RegEx Pattern to remove spaces from searchedCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

  // run an AJAX GET-request for our servers api,
  // including the user's character in the url
  $.get("/api/" + searchedCharacter, function(data) {
    // log the data to our console
    console.log(data);
    // empty to well-section before adding new content
    $("#well-section").empty();
    // if the data is not there, then return an error message
    if (!data) {
      $("#well-section").append("<h2> No event found!!!!!!!!!!!! </h2>");
    }
    else {
      // otherwise
      // append the character name
      //  for (var i = 1; i < data.length; i++) {

      // var row = $("<div>");
      // row.addClass("chirp");

      // row.append("<p>" + data[i].TITLE + " chirped.. </p>");
      // row.append("<p>" + data[i].TITLE + "</p>");

      for (var i = 1; i < data.length; i++) {
        // // create a parent div for the oncoming elements
        // var wellSection = $("<div>");
        // // add a class to this div: 'well'
        // wellSection.addClass("well");
        // // add an id to the well to mark which well it is
        // wellSection.attr("id", "character-well-" + i);
        // // append the well to the well section
        // $("#well-section").append(wellSection);
    
        // // Now add all of our character data to the well we just placed on the page
    
        // // make the name an h2,
        // $("#character-well-" + i).append("<h2>" + data[i].TITLE + "</h2>");
        // // the role an h3,
        // $("#character-well-" + i).append("<h3>Role: " + data[i].TITLE + "</h4>");
        // // the age an h3,
        // $("#character-well-" + i).append("<h3>Age: " + data[i].TITLE + "</h4>");
    
    
        var row =  
             
        '<div class="card-columns">' +
         '<div class="card cdbg">' +
           '<img class="card-img-top" src=' +'"'+  data[i].IMAGE +'"'  +   'alt="">' +
           '<div class="card-body">' +
             '<h5 class="card-title">' + data[i].TITLE + '</h5>' +
             '<p class="card-text">INFORMATIOM OF THE AREA PLAACED HERE</p>' +
           '</div>' +
         '</div>' +
         '<div class="card p-3 cdbg">'+
           '<blockquote class="blockquote mb-0 card-body">' +
            '<p>' + data[i].ADDRESS + '</p> ' +            
           '</blockquote>' +
         '</div>' +
    
         
           '<div class="card p-3 cdbg">' +
             '<blockquote class="blockquote mb-0 card-body">' +
               '<p>' + data[i].VENUE + '</p>' +               
             '</blockquote>' +
           '</div>' +
        
         
        
         '<div class="card p-3 text-center cdbg">' +
           '<blockquote class="blockquote mb-0">' +
             '<p>' + data[i].TIME + '</p>' +              
           '</blockquote>' +
    
         '</div>' +
         '<div class="card cdbg">' +
           '<div class="card-body">' +           
             '<p class="card-text"><a href="' + data[i].LINK + '">Tournament Page</a></p>' +             
           '</div>' +
         '</div>' +
         '<div class="card p-3 cdbg">' +
             '<blockquote class="blockquote mb-0 card-body">' +
               '<p><iframe width="300" height="360" src="https://www.youtube.com/embed/P-kQWJrjRV4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>' +                  
             '</blockquote>' +
           '</div>' +          
           '<div class="card p-3 cdbg">' +
               '<blockquote class="blockquote mb-0 card-body">' +
                 '<p>map map map map amp map map</p>' +                  
               '</blockquote>' +
             '</div>' +
    
             
           
       '</div>' 
    
    
    
    
    
    
    
       
        
        
    
    
      // $("#chirp-area").append(row);
     

      $("#well-section").prepend(row);

    }
    }





  });
});
