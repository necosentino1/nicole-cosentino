$(function(){

// hide info when page loads 
// $('.today-info').hide();

// listen for a click event on date
// call show info when event happens 

$('.date.today').click(showInfo);

$('.date.2017').click(showInfo2017);
// define a function to show info 

function showInfo () {
  $('.info.today').toggleClass('show');
}

function showInfo2017 () {
  $('.info.2017').toggleClass('show');
}

});