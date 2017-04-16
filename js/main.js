
$(document).ready(function(){

	var append = true;

	$('.keys').on('click', function(){
		var value = $(this).val();
			$('.calculation').append(value);
	});


	$('button[name="equals"]').on('click', function(){
		var calc = $('.calculation').text();
		var answer = eval(calc);
			$('.calculation').text(answer);
	});

	$('button[name="squareRoot"]').on('click', function(){
		var calc = $('.calculation').text();
		var answer = Math.sqrt(calc);
			$('.calculation').text('')
			$('.calculation').append(answer);

	});

	$('button[name="clear"]').on('click', function(){
		$('.calculation').text('0');
	});


	$('button[name="back"]').on('click', function(){

		var calc = $('.calculation').text();
		var shortString = calc.substr(0, calc.length- 1);
		$('.calculation').text(shortString);
	});
	

});



