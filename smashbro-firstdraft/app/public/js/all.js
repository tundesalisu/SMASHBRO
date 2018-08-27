// Code here handles what how the page displays all of the characters
// It pings the server. The server then pings the database and displays all of the characters.

// make a get request to our api to grab every character
// make a get request to our api to grab every character
$.get("/api", function(data) {

  // for each character that our server sends us back
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
    
     
    
     '<div class="card p-3 text-center">' +
       '<blockquote class="blockquote mb-0">' +
         '<p>' + data[i].TIME + '</p>' +              
       '</blockquote>' +

     '</div>' +
     '<div class="card">' +
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







     
    
    


   $("#well-section").append(row);



   
   
  }
});
