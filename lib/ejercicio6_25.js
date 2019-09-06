$(document).ready(function(){
	$('#example').on('click', 'button.switch', function(){
		$.ajax('result2.html', {
			beforeSend: function(){
				$('#status').text('Cargando...');
			}
		})
		.done(function(response){
			$('#result').html(response);
		})
		.fail(function(request, errorType, errorMessage){
			//timeout -> Tiempo de espera agotado
			//error -> Error en la carga del AJAX
			//abort -> Por alguna razón es abortada la petición
			//parseerror -> Error decodificando el JSON
			console.log(errorType);
			console.log(errorMessage);
			alert('Error');
		})
		.always(function(){
			$('#status').text('Completado')
		})
	});
});