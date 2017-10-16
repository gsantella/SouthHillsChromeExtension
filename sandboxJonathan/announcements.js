// Note: add variable length of announcements with array

/*$(function() {
  $.getJSON('http://thadpi.dynu.net:8000/', function(data) {
      $.each(data.announcements, function(index) {
          $('#ts' + index).html(moment(data.announcements[index].ts , 'YYYYMMDD').fromNow());
          $('#announ' + index).html(data.announcements[index].msg);
      });*/

var test = ['hi1', 'hi2', 'hi3', 'hi4', 'hi5', 'hi6']

$(function() {
  $.each(test, function(index) {
    $('ul').append('<li></li>')
    $('li').html(test[index]);
  });
});






    //announcement 1
    /*$('#ts0').html(moment(data.announcements[0].ts , 'YYYYMMDD').fromNow());
    $('#announ0').html(data.announcements[0].msg);

    //announcement 2
    $('#ts1').html(moment(data.announcements[1].ts , 'YYYYMMDD').fromNow());
    $('#announ1').html(data.announcements[1].msg);

    //announcement 3
    $('#ts2').html(moment(data.announcements[2].ts , 'YYYYMMDD').fromNow());
    $('#announ2').html(data.announcements[2].msg);

    //announcement 4
    $('#ts3').html(moment(data.announcements[3].ts , 'YYYYMMDD').fromNow());
    $('#announ3').html(data.announcements[3].msg);
  });
});*/
