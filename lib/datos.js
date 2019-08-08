var personas = {"personas":[{"nombrepersona":"persona1"},{"nombrepersona":"persona2"}]};

var servicios = {"servicios":[{"nombreservicio":"servicio1"},{"nombreservicio":"servicio2"},{"nombreservicio":"servicio3"},{"nombreservicio":"servicio4"}]};

var detalles = {"detalles":[{"nombrepersona":"persona1","nombreservicio":"servicio1","monto":100},{"nombrepersona":"persona2","nombreservicio":"servicio1","monto":500},{"nombrepersona":"persona1","nombreservicio":"servicio2","monto":300}]};

var p = JSON.parse(JSON.stringify(personas));
var s = JSON.parse(JSON.stringify(servicios));
var d = JSON.parse(JSON.stringify(detalles));

function cargarDatos() {
  var servicio = Array();
  var persona = Array();
  var detalle = Array();
  var totalS = Array();
  var totalD = Array();

  for (x = 0; x < s.servicios.length; x++){
    sr = s.servicios[x].nombreservicio;
    servicio[x] = sr;
  }

  for (x = 0; x < s.servicios.length; x++){
    suma = 0
    for (y = 0; y < d.detalles.length; y++) {
      if (s.servicios[x].nombreservicio == d.detalles[y].nombreservicio) {
        mnt = d.detalles[y].monto;
        suma += parseFloat(mnt);
      }
    }
    totalS[x] = suma; 
  }


    $('#datos > thead').append('<tr><th width="10%"></th>');


    for (x = 0; x < servicio.length; x++) {
      sr = s.servicios[x].nombreservicio;
    servicio[x] = sr;
    $('#datos > thead > tr').append('<th class="c">' + servicio[x] + '</th>');
  }

  $('#datos > thead').append('</tr>');


  $('#datos > tbody').append('<tr><td class="c"><div onclick="verDetalles()" class="btn-mas"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true">+</span></div></td>');  

  for (y = 0; y < totalS.length; y++){
    $('#datos > tbody > tr').append('<td class="c">' + totalS[y] + '</td>');
  }

  $('#datos > tbody').append('</tr>');

  for (x = 0; x < p.personas.length; x++){
    $('#datos > tfoot').append('<tr><td class="c1">' + p.personas[x].nombrepersona +'123</td>');
    
    for (y = 0; y < s.servicios.length; y++) {
        sum = 0; 
       
        for (z = 0; z < d.detalles.length; z++) {
        
        if ((s.servicios[y].nombreservicio == d.detalles[z].nombreservicio) && (p.personas[x].nombrepersona == d.detalles[z].nombrepersona)) {
          
          sum = d.detalles[z].monto;
         
          
        }
       
        
      }

        $('#datos >  tfoot tr:last-child').append('<td class="c">' + sum + '</td>');    

    }

    
    $('#datos > tfoot').append('</tr>');  
  }

  
  
}