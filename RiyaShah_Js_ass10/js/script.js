$(function () {


  $("#pass_error_message").hide();
  $("#conf-pass_error_message").hide();

  var error_pass = false;
  var error_confpass = false;
 
  $("#password").focusout(function(){
    check_password();
  });

  $("#conf-password").focusout(function(){
    check_confpassword();
  });

 

  function check_password(){
    var pass_length = $("#password").val().length;
    if(pass_length < 12){
      $("#pass_error_message").html("Atleast 12 characters");
      $("#pass_error_message").show();
      $("#password").css("border-bottom","2px solid #F90A0A");
      error_pass = true;
    }else{
      $("#pass_error_message").hide();
      //error_pass = false;
    }
  }

  function check_confpassword(){
    var pass = $("#password").val();
    var check = $("#conf-password").val();
    if(pass !== check){
      $("#conf-pass_error_message").html("password dosent match");
      $("#conf-pass_error_message").show();
     // $("#conf-password").css("border-bottom","2px solid #F90A0A");
      error_confpass = true;
    }else{
      $("#conf-pass_error_message").hide();
     // error_confpass = false;
    }
  }

 
  

   //Enable/Disable submit button
 
  $('#submit').attr('disabled', true);
   $('#accepted').change(function () {

    error_pass = false;
    error_confpass = false;

    check_password();
    check_confpassword();

//     if ($('#uname').val() != '' && $('#password').val() != '' && $('#conf-password').val() != '' && $('#accepted').val() != '' ) {
       if ($('#uname').val() != '' && error_pass === false && error_confpass === false && $('#accepted').val() != '' ) {
           $('#submit').attr('disabled', false);
           return true;
       } else {
           $('#submit').attr('disabled', true);
       }
   });

   //Displaying countires
   $.ajax({
		type: "Get",
		url:   'js/countries.js',
		success: function (data) {
			
			let show = '<option value="selected" selected>Select your country</option>';

			countries.forEach( function (display) {
				show += `'<option value=${(display.code)}> ${display.name} </option>'`;
			});
			$("#country").append(show);
	
		}
	});

  //After submit
 var form = document.getElementById('login'); 

  form.addEventListener('submit', function (eventData) {             // When user submits form
    eventData.preventDefault();                              // Stop it being sent
    var elements = this.elements;                    // Get all form elements
    var username = elements.uname.value;          // Select username entered
    var msg = 'Welcome ' + username;            // Create welcome message
    document.getElementById('main').textContent = msg; // Write welcome message
  });
  

  
});

    
