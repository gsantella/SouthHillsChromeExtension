$(function() {
  $.getJSON('http://thadpi.dynu.net:8000/', function(data) {
    //announcement 1
    $('#ts0').html(data.announcements[0].ts);
    $('#announ0').html(data.announcements[0].msg);
    //announcement 2
    $('#ts1').html(data.announcements[1].ts);

    //announcement 3
    $('#ts2').html(data.announcements[2].ts);

    //announcement 4
    $('#ts3').html(data.announcements[3].ts);
  });
});
