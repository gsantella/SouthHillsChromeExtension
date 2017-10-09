$('div').on('click', function() {
  $.getJSON('http://thadpi.dynu.net:8000/', function(data) {
    $('div').html(data.announcements[0]);
  });
});
