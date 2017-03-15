$(function(){


// listen for a click event on buttons 
$('.button-1').click(timelineShow);
$('.button-2').click(timelineShowReverse);

// define a function to toggle timeline show for button 1 
// define a function to toggle timeline and timeline reverse for button 2
function timelineShow () {
  $('.timeline').toggleClass('show');
  $('.intro-reverse').toggleClass('show');
}


function timelineShowReverse () {
  $('.timeline').toggleClass('timeline-reverse');
}



// listen for a click event on dates
$('.date.1').click(showInfo1);
$('.date.2').click(showInfo2);
$('.date.3').click(showInfo3);
$('.date.4').click(showInfo4);
$('.date.5').click(showInfo5);
$('.date.6').click(showInfo6);
$('.date.7').click(showInfo7);
$('.date.8').click(showInfo8);

// define functions to toggle info after click event on date 
function showInfo1 () {
  $('.info.1').toggleClass('show');
}

function showInfo2 () {
  $('.info.2').toggleClass('show');
}

function showInfo3 () {
  $('.info.3').toggleClass('show');
}

function showInfo4 () {
  $('.info.4').toggleClass('show');
}

function showInfo5 () {
  $('.info.5').toggleClass('show');
}

function showInfo6 () {
  $('.info.6').toggleClass('show');
}

function showInfo7 () {
  $('.info.7').toggleClass('show');
}

function showInfo8 () {
  $('.info.8').toggleClass('show');
}

});