$(function(){

// hide info when page loads 
$('.today-info').hide();

// listen for a click event on date
// call show info when event happens 

$('.date').click(showInfo);

// define a function to show info 

function showInfo () {
  $('.today-info').toggle();
}

});