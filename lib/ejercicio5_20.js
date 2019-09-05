$(document).ready(function() {
	$('.item-box-tarjeta').on('click', 'a.info-link', function(event){
		event.preventDefault();
		//fadeShow -> muestra
		//fadeHide -> Oculta
		//fadeToggle -> muestra u oculta
		$(this).closest('.item-box-tarjeta').find('.more-info').fadeToggle(1000, function(){
			//alert('Se completo!');
		});
	});
});