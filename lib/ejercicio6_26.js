$(document).ready(function() {	
	 $.ajax('destinations.json', {
		dataType: 'json',
		contentType: 'application/json',
		cache: false
	 })
	 .done(function(response){
	   console.log(response);
	   var html;
	   $.each(response, function(index, element){
		 html = '<div class="item-box-tarjeta col-md-6" data-id="'+element.id+'">';
		 html += '<img src="lib/images/'+element.image+'" />';
		 html += '<div class="item-title">'+element.name+'</div>';
		 html += '<p>'+element.description+'</p>';
		 html += '<div class="item-price">$'+element.price+'</div>';
		 html += '<button>Add to cart</button>';
		 html += '<div><a href="#" class="info-link">More info</a></div>';
		 html += '<div class="more-info"><p>'+element.moreInfo+'</p></div>';
		 html += '</div>';
   
		 $('#fondorow').append(html);
	   });
	 });
	
	$('#fondorow').on('click', 'a.info-link', function(event){
		event.preventDefault();
		$(this).closest('.item-box-tarjeta').find('.more-info').slideToggle('fast');
	});
});