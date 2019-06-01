$(document).ready(function () {
    $('#prueba').on('click', function () {
        alert('jQuery is up and running!');
    });

    $('.class1').text('Este es un elemento seleccionado y modificado a traves de la clase class=class1 con el selector CSS .class1');
    $('#pruebacontainer').html('Este elemento es seleccionado a traves del id=pruebacontainer con el selector CSS #pruebacontainer');

});