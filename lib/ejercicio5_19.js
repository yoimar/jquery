$(document).ready(function() {
	$('.item-box-tarjeta').on('click', 'a.info-link', function(event){
		event.preventDefault();
		//Show -> muestra
		//Hide -> Oculta
		//toggle -> muestra u oculta
		$(this).closest('.item-box-tarjeta').find('.more-info').toggle(1000, function(){
			//alert('Se completo!');
		});
	});
});