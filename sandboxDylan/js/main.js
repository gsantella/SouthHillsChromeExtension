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
