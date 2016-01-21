// ADD YOUR JS HERE
// console.log('loaded');
// resizer
// function resizeBg(){
//   var docH = $(document).height();
//   $('#background').css('height', docH);
// }

// Document ready
$(function(){
  // setup datepicker
  $('.datepicker').pickadate({
    selectYears: 90
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


// Add age validation method
$.validator.addMethod("minAge", function(value, element, min) {
    var today = new Date();
    var birthDate = new Date(value);
    var age = today.getFullYear() - birthDate.getFullYear();
    if (age > min+1) {
        return true;
    }
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age >= min;
}, "You are not old enough!");


$("#contest").validate({
  focusInvalid: false,
  rules: {
    // first name
    'entry.1862104037': {
      //checks for whitespace
      required: {
        depends:function(){
          $(this).val($.trim($(this).val()));
          return true;
        }
      },
      minlength: 2
    },
    // last name
    'entry.2059930985': {
      //checks for whitespace
      required: {
        depends:function(){
          $(this).val($.trim($(this).val()));
          return true;
        }
      },
      minlength: 2
    },
    // email
    'entry.322932457': {
      //checks for whitespace
      required: {
        depends:function(){
          $(this).val($.trim($(this).val()));
          return true;
        }
      },
      email: true
    },
    'entry.328909515': {
        required: true,
        minAge: 13
    },
    'entry.1685083969': {
        number: true,
        minlength: 10,
        maxlength: 11
    }
  },
  messages: {
    // first name
    'entry.1862104037': {
      required: "Please give your first name.",
      minlength: jQuery.validator.format("At least {0} characters required!"),
    },
    // last name
    'entry.2059930985': {
      required: "Please give your last name.",
      minlength: jQuery.validator.format("At least {0} characters required!"),
    },
    // email
    'entry.322932457': {
      required: "Please give your e-mail address.",
      email: "Please give a valid e-mail address."
    },
    // birthday
    'entry.328909515': {
      required: "You must enter your date of birth",
      minAge: "You must be at least 13 years old."
    },
    'entry.1685083969': {
      number: "Phone number must be numbers only.",
      minlength: "Phone numbers must be at least 10 digits.",
      maxlength: "Phone numbers can be no longer than 11 digits."
    }
  },
  invalidHandler: function(form, validator) {
    growlz();
  }
});

$("#age-gate").validate({
  focusInvalid: false,
  rules: {
    birthday: {
      required: true,
      minAge: 13
    }
  },
  messages: {
    birthday: {
      required: "You must enter your date of birth",
      minAge: "You must be at least 13 years old."
    }
  },
  invalidHandler: function(form, validator) {
    growlz();
  },
  success: "valid",
  submitHandler: function() {
    $('#gate').fadeOut( 500 );
    setTimeout(function(){
      $('#content').fadeIn();
      $('#footer').fadeIn();
    }, 500);

  }
});
