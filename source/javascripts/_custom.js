// ADD YOUR JS HERE
// console.log('loaded');
function resizeBg(){
  var docH = $(document).height();
  $('#background').css('height', docH);
}

$(function(){
  resizeBg();
});

$(window).resize(function(){
  resizeBg();
});

$(function(){
  $.growl.error({ message: "The kitten is attacking!" });
});
