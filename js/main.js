$(function(){

// hide info when page loads 
// $('.today-info').hide();

// listen for a click event on date
// call show info when event happens 

$('.button-1').click(timelineShow);
$('.button-2').click(timelineShowReverse);

$('.date.1').click(showInfo);

$('.date.2').click(showInfo2017);
// define a function to show info 

function timelineShow () {
  $('.timeline').toggleClass('show');
  $('.button-2').toggleClass('show');
}

function timelineShowReverse () {
  $('.timeline').toggleClass('timeline-reverse');
}

function showInfo () {
  $('.info.1').toggleClass('show');
}

function showInfo2017 () {
  $('.info.2').toggleClass('show');
}

});