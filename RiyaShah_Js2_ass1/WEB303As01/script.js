/*
	WEB 303 Assignment 1 - jQuery
	{Riya Shah}
*/

//1

/*$(document).ready(function (){

  //  $('input').change();
 });
*/

//2

$(document).ready(function (){

    //$('input').change(function(){
	$('input').keyup(function(){

	let salary= $('#yearly-salary').val();
	let percent = $('#percent').val();

	let amount = (salary*percent)/100;

	$('span#amount').text('$'+ amount.toFixed(2));

	});

});
