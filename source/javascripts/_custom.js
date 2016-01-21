// ADD YOUR JS HERE
// console.log('loaded');
function resizeBg(){
  var docH = $(document).height();
  $('#background').css('height', docH);
}

$(function(){
  resizeBg();
  // test growl
  $.growl.error({ message: "The kitten is attacking!" });
  $('.datepicker').pickadate();
});

$(window).resize(function(){
  resizeBg();
});
