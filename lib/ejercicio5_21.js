$(document).ready(function() {
	$('.item-box-tarjeta').on('click', 'a.info-link', function(event){
		event.preventDefault();
		//SlideDown -> muestra
		//SlideUp-> Oculta
		//slideToggle -> muestra u oculta
		$(this).closest('.item-box-tarjeta').find('.more-info').slideToggle('fast', function() {
			alert('se ha completado');
		});
	});
});