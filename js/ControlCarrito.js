
var comprar=document.getElementById("boton");

comprar.addEventListener("click",compraA,false);
window.addEventListener("load", cargar, false);
window.addEventListener("reload", cargar, false);
window.addEventListener("storage", cargar, false);

function cargar(){

	var tabla = document.getElementById("tabla");
    var suma = 0;
	for (var i =0 ; i<localStorage.length;i++) {
		var clave = localStorage.key(i);
		var valorJSON = localStorage.getItem(clave);
		var objeto = JSON.parse(valorJSON);
		tabla.innerHTML+="<tr> <td> " + objeto.titulo + "<p></p><img  class='selimg' src='Imagenes/"+objeto.imagen+"'></td> <td> " + objeto.precio +"c/u </td> <td> <button type='button' onclick='menos("+clave+")' id='boton"+clave+"'><i class='fa fa-minus'></i></button> " + objeto.cantidad + " <button type='button' onclick='mas("+clave+")' id='boton"+clave+"'><i class='fa fa-plus'></i></button></td> <td> $"+objeto.total +
		".00 </td> <td><button type='button' onclick='borrar("+clave+")' id='boton"+clave+"'><img alt='Borrar' src='Imagenes/Delete16.png'></button><td><tr> " ;
        suma+=objeto.total;
	}
    tabla.innerHTML+="<tr><td></td><td></td><th>Total a pagar </th><th>$"+suma+"</th></tr>";
}

function eliminar()
{
   localStorage.clear();
  location.reload();
}

function borrar(clave)
{

	localStorage.removeItem(clave);
	location.reload();
}

function mas(clave)
{
	var valorJSON2 = localStorage.getItem(clave);
	var item = JSON.parse(valorJSON2);
   	item.cantidad++;
    var total_str = ""+item.precio;
    var array_precio = total_str.split("$");
    item.total = parseFloat(array_precio[1].replace(/[^0-9-.]/g,''))*item.cantidad;
	var myJSON3 = JSON.stringify(item);
	localStorage.setItem(clave,myJSON3);
	location.reload();
}

function menos(clave)
{
	var valorJSON2 = localStorage.getItem(clave);
	var item = JSON.parse(valorJSON2);
   	if (item.cantidad>0) {
   	    item.cantidad--;
        var total_str = ""+item.precio;
        var array_precio = total_str.split("$");
        item.total = parseFloat(array_precio[1].replace(/[^0-9-.]/g,''))*item.cantidad;
   	}
	var myJSON3 = JSON.stringify(item);
	localStorage.setItem(clave,myJSON3);
	location.reload();
}


function compraA(){
    var envio = prompt("Por favor, ingresa la dirección de tu correo electronico: ", "");
    var patt = new RegExp("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$");
    if (envio == null || envio == "") {
             alert("Ingrese una dirección de correo valida");
    } else {

          if(patt.exec(envio)){
          	alert("Las instrucciones de pago seran enviadas al correo: "+envio+" en un momento.");
				 		var xmlhttp = new XMLHttpRequest();
				 		xmlhttp.open("GET", "mail.php?email="+envio, true);
						xmlhttp.send();
						xmlhttp.onreadystatechange = function() {
						  if (xmlhttp.readyState === 4) {
						    var response = JSON.parse(xmlhttp.responseText);
						      if (xmlhttp.status === 200 && response.status === 'OK') {
						         		if (confirm(response.mensaje)) {
														eliminar();
												}
						      } else {

						      }
						  }
						}
          }else{
          alert("Ingrese una dirección de correo valida");
        	}

    }
}
