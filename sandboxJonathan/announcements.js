$.getJSON('http://thadpi.dynu.net:8000/', function(data) {
  $.each(data.announcements, function(index) {
    $('#announcements').append(`<li><strong>${moment(data.announcements[index].ts , 'YYYYMMDD').fromNow()}</strong>${data.announcements[index].msg}</li>`);
  });
});
