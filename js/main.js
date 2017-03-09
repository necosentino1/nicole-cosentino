$(function(){

// hide info when page loads 
$('.hide').hide();

// listen for a click event on date
// call show info when event happens 

$('.date').click(showInfo);

// define a function to show info 

function showInfo () {
  $('.hide').toggle();
}

});