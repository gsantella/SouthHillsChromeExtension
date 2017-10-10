// Current Temperature Elements
var altoonaTempElement = document.getElementById('temperature_altoona');
var stateCollegeTempElement = document.getElementById('temperature_statecollege');
var lewistownTempElement = document.getElementById('temperature_lewistown');

// Execute AJAX call every 5 seconds
var timer = setInterval(function() {
  var request = new XMLHttpRequest();

  // Setup the request
  request.open('GET', 'http://api.openweathermap.org/data/2.5/group?id=5178195,5213681,5197850&units=imperial&appid=fae79d6ccbaa879882d5706085ebe091', true);

  // Called when data is back from data API
  request.onload = function() {
    var dataFromAPI = JSON.parse(request.responseText);
    altoonaTempElement.innerHTML = Math.round(dataFromAPI.list[0].main.temp);
    stateCollegeTempElement.innerHTML = Math.round(dataFromAPI.list[1].main.temp);
    lewistownTempElement.innerHTML = Math.round(dataFromAPI.list[2].main.temp);
    console.log(dataFromAPI);
  }

  // Called whent ehre was a connection error to the data API
  request.onerror = function() {
    console.log("Something went wrong!")
  }

  request.send();

},  5000);
/*
// Current Temperature Elements
var altoonaIcon = document.getElementById('weather_icon_altoona');
var stateCollegeIcon = document.getElementById('weather_icon_statecollege');
var lewistownIcon = document.getElementById('weather_icon_lewistown');

// Execute AJAX call every 5 seconds
var timer = setInterval(function() {
  var request = new XMLHttpRequest();

  // Setup the request
  request.open('GET', 'https://openweathermap.org/weather-conditions', true);

  // Called when data is back from data API
  request.onload = function() {
    var dataFromAPI = JSON.parse(request.responseText);
    altoonaIcon.innerHTML = dataFromAPI.list[0].weather.icon);
    stateCollegeIcon.innerHTML = dataFromAPI.list[1].weather.icon);
    lewistownIcon.innerHTML = dataFromAPI.list[2].weather.icon);
    console.log(dataFromAPI);
  }

  // Called whent ehre was a connection error to the data API
  request.onerror = function() {
    console.log("Something went wrong!")
  }

  request.send();

},  5000);*/
