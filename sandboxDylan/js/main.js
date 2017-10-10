var per1 = document.getElementById('period1');
var per2 = document.getElementById('period2');


var timer = setInterval(function() {

  var currentTime = new Date();

  var currentHour = currentTime.getHours();
  var currentMin = currentTime.getMinutes();

  currentHour = 8;

  if ((currentHour == 8) && (currentMin < 50)){
    per1.style.backgroundColor = 'lightyellow';
  } else if ((currentHour == 8) && (currentMin >= 50)){
    per2.style.backgroundColor = 'lightyellow';
  }



}, 1000);
