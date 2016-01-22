var ANTI_GHOST_DELAY = 2000;

var POINTER_TYPE = {
  MOUSE: 0,
  TOUCH: 1
};

function preventGhosts(element) {

  var latestInteractionType,
    latestInteractionTime;

  function handleTap(type, e) {
    // console.log('got tap ' + e.type + ' of pointer ' + type);

    var now = Date.now();

    if (type !== latestInteractionType) {

      if (now - latestInteractionTime <= ANTI_GHOST_DELAY) {
        // console.log('!prevented!');
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }

      latestInteractionType = type;
    }

    latestInteractionTime = now;
  }

  function attachEvents(eventList, interactionType) {
    eventList.forEach(function(eventName) {
      element[0].addEventListener(eventName, handleTap.bind(null, interactionType), true);
    });
  }

  var mouseEvents = ['mousedown', 'mouseup', 'mousemove'];
  var touchEvents = ['touchstart', 'touchend'];

  attachEvents(mouseEvents, POINTER_TYPE.MOUSE);
  attachEvents(touchEvents, POINTER_TYPE.TOUCH);
}

$(document).on('click','a', function(e){
    var $link = $(e.target);
    e.preventDefault();
    if(!$link.data('lockedAt') || +new Date() - $link.data('lockedAt') > 300) {
        doSomething();
    }
    $link.data('lockedAt', +new Date());
});

// Datepicker
$(document).ready(function(){
  $("#dtBox").DateTimePicker({
    dateFormat: "mm-dd-yyyy"
  });
});

// iterate through errors and growl them
function growlz(){
  setTimeout(function(){
    $('label.error').each(function(){
      if($(this).html() != ""){
        var errorText = $(this).text();
        $.growl.error({ message: errorText });
      }
    });
  }, 100);
}
