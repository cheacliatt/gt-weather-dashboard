// function searchCity() {
//     cityEl;
// }

// var apiKey = "1935f5d7d75a269680ddfadd7b264dcb"

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}"

$("#city-button").on("click", function () {
  var cityEl = $("#city-input").val();
  console.log(cityEl);
  var apiKey = "1935f5d7d75a269680ddfadd7b264dcb";

  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityEl +
    "&units=imperial&appid=" +
    apiKey;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var tempEl = response.main.temp;
    var humidEl = response.main.humidity;
    var windEl = response.wind.speed;
    var iconcode = response.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

    $("#jumbo-date").text(response.name);
    $("#jumbo-temp").text("Temperature: " + tempEl);
    $("#jumbo-humid").text("Humidity: " + humidEl + "%");
    $("#jumbo-wind").text(windEl + " MPH");
    $("#jumbo-icon").attr("src", iconurl);
    // $("#jumbo-uv").text(tempEl);
  });
});

// $("button").on("click", function() {
//     // Grabbing and storing the data-animal property value from the button
//     var animal = $(this).attr("data-animal");

//     // Constructing a queryURL using the animal name
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//       animal + "&api_key=dc6zaTOxFJmzC&limit=10";

//     // Performing an AJAX request with the queryURL
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//       // After data comes back from the request
//       .then(function(response) {
//         console.log(queryURL);

//         console.log(response);
//         // storing the data from the AJAX request in the results variable
//         var results = response.data;

//         // Looping through each result item
//         for (var i = 0; i < results.length; i++) {

//           // Creating and storing a div tag
//           var animalDiv = $("<div>");

//           // Creating a paragraph tag with the result item's rating
//           var p = $("<p>").text("Rating: " + results[i].rating);

//           // Creating and storing an image tag
//           var animalImage = $("<img>");
//           // Setting the src attribute of the image to a property pulled off the result item
//           animalImage.attr("src", results[i].images.fixed_height.url);

//           // Appending the paragraph and image tag to the animalDiv
//           animalDiv.append(p);
//           animalDiv.append(animalImage);

//           // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
//           $("#gifs-appear-here").prepend(animalDiv);
//         }
//       });
//   });
