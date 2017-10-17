// Starting Dylan's JS ///////////////////////////////////
var per1 = document.getElementById('period1');
var per2 = document.getElementById('period2');
var per3 = document.getElementById('period3');
var per4 = document.getElementById('period4');
var ch = document.getElementById('commonHour');
var per5 = document.getElementById('period5');
var per6 = document.getElementById('period6');
var per7 = document.getElementById('period7');
var per8 = document.getElementById('period8');

function highlightCurrentPeriod() {

  var currentTime = new Date();

  var currentHour = currentTime.getHours();
  var currentMin = currentTime.getMinutes();

  if ((currentHour == 8) && (currentMin < 50)){
    per1.style.backgroundColor = 'lightyellow';
  } else if ((currentHour == 8) && (currentMin >= 50)){
    per2.style.backgroundColor = 'lightyellow';
  } else if ((currentHour == 9) && (currentMin < 50)){
    per2.style.backgroundColor = 'lightyellow';
  } else if ((currentHour == 9) && (currentMin >= 50)){
    per3.style.backgroundColor = 'lightyellow';
  } else if ((currentHour == 10) && (currentMin < 50)){
    per3.style.backgroundColor = 'lightyellow';
  } else if ((currentHour == 10) && (currentMin >= 50)){
    per4.style.backgroundColor = 'lightyellow';
  } else if ((currentHour == 11) && (currentMin < 50)){
    per4.style.backgroundColor = 'lightyellow';
  } else if ((currentHour == 11) && (currentMin >= 50)){
    ch.style.backgroundColor = 'lightyellow';
  } else if ((currentHour == 12) && (currentMin < 50)){
    ch.style.backgroundColor = 'lightyellow';
  } else if ((currentHour == 12) && (currentMin >= 50)){
    per5.style.backgroundColor = 'lightyellow';
  } else if ((currentHour == 13) && (currentMin < 50)){
    per5.style.backgroundColor = 'lightyellow';
  } else if ((currentHour == 13) && (currentMin >= 50)){
    per6.style.backgroundColor = 'lightyellow';
  } else if ((currentHour == 14) && (currentMin < 50)){
    per6.style.backgroundColor = 'lightyellow';
  } else if ((currentHour == 14) && (currentMin >= 50)){
    per7.style.backgroundColor = 'lightyellow';
  } else if ((currentHour == 15) && (currentMin < 50)){
    per7.style.backgroundColor = 'lightyellow';
  } else if ((currentHour == 15) && (currentMin >= 50)){
    per8.style.backgroundColor = 'lightyellow';
  } else if ((currentHour == 15) && (currentMin < 50)){
    per9.style.backgroundColor = 'lightyellow';
  }
};

highlightCurrentPeriod();
// Ending Dylan's JS ////////////////////////////////////////

// Dynamic Day Script ///////////////////////////////////////
var day = document.getElementById('happyDay');
var currentDay = new Date().getDay();
var weekDays = ['Happy Sunday!', 'Happy Monday!', 'Happy Tuesday!',
                'Happy Wednesday!', 'Happy Thursday', 'Happy Friday', 'Happy Saturday!'];
day.innerHTML = weekDays[currentDay];
// Ending Dynamic Day Script ////////////////////////////////


// Starting Rich's Script ///////////////////////////////////
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
    //weather description
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
  // Ending Rich's Script ////////////////////////////////////////////////////////
