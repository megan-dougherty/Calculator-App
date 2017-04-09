$(document).ready(function(){

	var append = true;

	$('.keys button').on('click', function(){
		var value = $(this).val();
		$('.calculation').append(value);

	});

	$('button[name="equals"]').on('click', function(){
		var calc = $('.calculation').text();
		var answer = eval(calc); 
		$('.answer').text(answer);
		if(append != true){
			$('.calculation').text(answer);
		}
	});

	$('button[name="clear"]').on('click', function(){
		$('.calculation').text('');
		$('.answer').text('');
	});

	$('.button[name="append"]').on('click', function(){
		if(append == true){
			append = false;
		} else {
			append = true;
		}
	});

	$('button[name="back"]').on('click', function(){

		var calc = $('.calculation').text();
		var shortString = calc.substr(0, calc.length- 1);
		$('.calculation').text(shortString);
	});
	

});




