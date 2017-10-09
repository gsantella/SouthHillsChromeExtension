// Current Temperature Elements
var altoonaTempElement = document.getElementById('temperature_altoona');

// Execute AJAX call every 5 seconds
var timer = setInterval(function() {


  var request = new XMLHttpRequest();

  // Setup the request
  request.open('GET', '//api.openweathermap.org/data/2.5/weather?zip=16602,us&units=imperial&appid=fae79d6ccbaa879882d5706085ebe091', true);

  // Called when data is back from data API
  request.onload = function() {
    var dataFromAPI = JSON.parse(request.responseText);
    //FILL THIS IN
    console.log(dataFromAPI);
  }

  // Called whent ehre was a connection error to the data API
  request.onerror = function() {
    console.log("Something went wrong!")
  }

  // Make the request
  request.send();

},  5000);
