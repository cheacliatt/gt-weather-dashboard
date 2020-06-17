// function searchCity() {
//     cityEl;
// }

// var apiKey = "1935f5d7d75a269680ddfadd7b264dcb"

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}"

$("#city-button").on("click", function () {
  $("#responsive-page").attr("style", "display:block");
  var date = moment().format("(M/D/YYYY)");
  var cityEl = $("#city-input").val();
  console.log(cityEl);
  var apiKey = "1935f5d7d75a269680ddfadd7b264dcb";

  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityEl +
    "&units=imperial&appid=" +
    apiKey;

  var fivedayURL =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
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
    var latEl = response.coord.lat;
    var lonEl = response.coord.lon;

    $("#jumbo-date").text(response.name + " " + date);
    $("#jumbo-temp").text("Temperature: " + tempEl);
    $("#jumbo-humid").text("Humidity: " + humidEl + "%");
    $("#jumbo-wind").text("Wind: " + windEl + " MPH");
    $("#jumbo-icon").attr("src", iconurl);


    var uviURL =
    "http://api.openweathermap.org/data/2.5/uvi?appid=" +
    apiKey +
    "&lat="+
    latEl +
    "&lon="+
    lonEl;

    $.ajax({
        url: uviURL,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        var uviEl = response.value;
        $("#jumbo-uv").text(uviEl);
        if(uviEl < 3){
            $("#jumbo-uv").attr("style", "background-color:green");
        } else if (uviEl > 3 && uviEl < 6) {
            $("#jumbo-uv").attr("style", "background-color:orange");
        } else  {
            $("#jumbo-uv").attr("style", "background-color:red");
        }
    });
  });

  var dayOne = moment().add(1, "days");
  dayOne = dayOne.format("(M/D/YYYY)");
  $("#day-one").text(dayOne);

  var dayTwo = moment().add(2, "days");
  dayTwo = dayTwo.format("(M/D/YYYY)");
  $("#day-two").text(dayTwo);

  var dayThree = moment().add(3, "days");
  dayThree = dayThree.format("(M/D/YYYY)");
  $("#day-three").text(dayThree);

  var dayFour = moment().add(4, "days");
  dayFour = dayFour.format("(M/D/YYYY)");
  $("#day-four").text(dayFour);

  var dayFive = moment().add(5, "days");
  dayFive = dayFive.format("(M/D/YYYY)");
  $("#day-five").text(dayFive);


  $.ajax({
    url: fivedayURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var dayOneTemp = response.list[3].main.temp;
    var dayOneHumid = response.list[3].main.humidity;
    var dayOneIconCode = response.list[3].weather[0].icon;
    var dayOneIconURL = "http://openweathermap.org/img/w/" + dayOneIconCode + ".png";
    var dayTwoTemp = response.list[11].main.temp;
    var dayTwoHumid = response.list[11].main.humidity;
    var dayTwoIconCode = response.list[11].weather[0].icon;
    var dayTwoIconURL = "http://openweathermap.org/img/w/" + dayTwoIconCode + ".png";
    var dayThreeTemp = response.list[19].main.temp;
    var dayThreeHumid = response.list[19].main.humidity;
    var dayThreeIconCode = response.list[19].weather[0].icon;
    var dayThreeIconURL = "http://openweathermap.org/img/w/" + dayThreeIconCode + ".png";
    var dayFourTemp = response.list[27].main.temp;
    var dayFourHumid = response.list[27].main.humidity;
    var dayFourIconCode = response.list[27].weather[0].icon;
    var dayFourIconURL = "http://openweathermap.org/img/w/" + dayFourIconCode + ".png";
    var dayFiveTemp = response.list[35].main.temp;
    var dayFiveHumid = response.list[35].main.humidity;
    var dayFiveIconCode = response.list[35].weather[0].icon;
    var dayFiveIconURL = "http://openweathermap.org/img/w/" + dayFiveIconCode + ".png";

    $("#fd-one-temp").text("Temp: "+dayOneTemp);
    $("#fd-one-humid").text("Humidity: "+dayOneHumid+"%");
    $("#fd-one-image").attr("src", dayOneIconURL);
    $("#fd-two-temp").text("Temp: "+dayTwoTemp);
    $("#fd-two-humid").text("Humidity: "+dayTwoHumid+"%");
    $("#fd-two-image").attr("src", dayTwoIconURL);
    $("#fd-three-temp").text("Temp: "+dayThreeTemp);
    $("#fd-three-humid").text("Humidity: "+dayThreeHumid+"%");
    $("#fd-three-image").attr("src", dayThreeIconURL);
    $("#fd-four-temp").text("Temp: "+dayFourTemp);
    $("#fd-four-humid").text("Humidity: "+dayFourHumid+"%");
    $("#fd-four-image").attr("src", dayFourIconURL);
    $("#fd-five-temp").text("Temp: "+dayFiveTemp);
    $("#fd-five-humid").text("Humidity: "+dayFiveHumid+"%");
    $("#fd-five-image").attr("src", dayFiveIconURL);
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
