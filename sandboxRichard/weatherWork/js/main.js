var altoonaTempElement = document.getElementById('temperature_altoona');
var stateCollegeTempElement = document.getElementById('temperature_statecollege');
var lewistownTempElement = document.getElementById('temperature_lewistown');
var weather_statecollege = document.getElementById('weather_statecollege')
var weather_altoona = document.getElementById('weather_altoona')
var weather_lewistown = document.getElementById('weather_lewistown')
var altoona_icon = document.getElementById('weather_icon_altoona');
var statecollege_icon = document.getElementById('weather_icon_statecollege');
var lewistown_icon = document.getElementById('weather_icon_lewistown');


  var request = new XMLHttpRequest();

  request.open('GET', 'http://api.openweathermap.org/data/2.5/group?id=5178195,5213681,5197850&units=imperial&appid=fae79d6ccbaa879882d5706085ebe091', true)
  request.onload = function() {
    var dataFromAPI = JSON.parse(request.responseText);
    //get the weather
    altoonaTempElement.innerHTML = Math.round(dataFromAPI.list[0].main.temp);
    stateCollegeTempElement.innerHTML = Math.round(dataFromAPI.list[1].main.temp);
    lewistownTempElement.innerHTML = Math.round(dataFromAPI.list[2].main.temp);
    //weather words
    weather_statecollege.innerHTML = dataFromAPI.list[0].weather[0].description;
    weather_altoona.innerHTML = dataFromAPI.list[1].weather[0].description;
    weather_lewistown.innerHTML = dataFromAPI.list[2].weather[0].description;
    //get the icon
    altoona_icon.src = 'http://openweathermap.org/img/w/' + dataFromAPI.list[0].weather[0].icon + '.png';
    statecollege_icon.src = 'http://openweathermap.org/img/w/' + dataFromAPI.list[1].weather[0].icon + '.png';
    lewistown_icon.src = 'http://openweathermap.org/img/w/' + dataFromAPI.list[2].weather[0].icon + '.png';
    console.log(dataFromAPI);
  }

  // Called when there was a connection error to the data API
  request.onerror = function() {
    console.log("Something went wrong!")
  }

  request.send();
