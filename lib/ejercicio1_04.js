$(document).ready(function () {
    $('#prueba1 > div > input[required]').addClass('highlighted');
    $('#prueba2 > div > input[placeholder="Phone"]').addClass('highlighted');
    $('#prueba3 > div > input[placeholder*="Name"]').addClass('highlighted');
});

totalD = sum;
  console.log(totalD);
  $('#datos > tfoot > tr').append('<td class="c">' + totalD + '</td></tr>');  
