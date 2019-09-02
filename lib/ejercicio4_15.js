$(document).ready(function() {
	$('#add-container').on('click', 'button', function(){
		var value = $('#add-container input').val();
		console.log(value);

		var html = '<div class="item">\
			<div class="remove">X</div>' + value + '</div>';
		console.log(html);

		//append colocará en la parte final
		//append primera forma
		//$('#places-container').append(html);
		//append segunda forma
		//$(html).appendTo('#places-container');

		//prepend coloca al principio de la página 
		$('#places-container').prepend(html);
		//$(html).prependTo('#places-container');
	});
});