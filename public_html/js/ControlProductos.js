/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

var uno = document.getElementById("uno"),
    dos = document.getElementById("dos"),
    tres = document.getElementById("tres"),
    cuatro = document.getElementById("cuatro"),
    cinco = document.getElementById("cinco"),
    seis = document.getElementById("seis"),
    siete = document.getElementById("siete"),
    ocho = document.getElementById("ocho"),
    nueve = document.getElementById("nueve"),
    diez = document.getElementById("diez"),
    once = document.getElementById("once"),
    doce = document.getElementById("doce"),
    trece = document.getElementById("trece"),
    catorce = document.getElementById("catorce"),
    quince = document.getElementById("quince");
    
    uno.addEventListener("click", procesa1, false);
    dos.addEventListener("click", procesa2, false);
    tres.addEventListener("click", procesa3, false);
    cuatro.addEventListener("click", procesa4, false);
    cinco.addEventListener("click", procesa5, false);
    seis.addEventListener("click", procesa6, false);
    siete.addEventListener("click", procesa7, false);
    ocho.addEventListener("click", procesa8, false);
    nueve.addEventListener("click", procesa9, false);
    diez.addEventListener("click", procesa10, false);
    once.addEventListener("click", procesa11, false);
    doce.addEventListener("click", procesa12, false);
    trece.addEventListener("click", procesa13, false);
    catorce.addEventListener("click", procesa14, false);
    quince.addEventListener("click", procesa15, false);
    
    function procesa1(){
        var cantidad = document.getElementById("c1").value,
            total = cantidad * 850,
            clave = "1";
            console.log('Test sobre exboxes');
            if(total === 0){
               alert("No puede agregar el producto si aun no especifica" +  
                       "la cantidad que desea"); 
            }
            else{
                var objeto1 = new Object();
                objeto1.titulo = "Asura´s Wrath";
                objeto1.precio = "$850.00";
                objeto1.cantidad = cantidad;
                objeto1.total = total;
                objeto1.imagen = "asura.jpg";
                
                var myJSON = JSON.stringify(objeto1);

                var peticion = "Juego: Asura´s Wrath " + " Precio: $850.00 " 
                        + "\nCantidad solicitada: " + cantidad + " Total a pagar: $"  + total;
                if(window.localStorage){
                    localStorage.setItem(clave, myJSON);
                    alert(peticion + "\nPeticion almacenada");
                }
                else{
                    alert("Error al almacenar");
                }
            }       
    }
    function procesa2(){
        var cantidad = document.getElementById("c2").value,
            total = cantidad * 1210,
            clave = "2";
    
            if(total === 0){
               alert("No puede agregar el producto si aun no especifica" +  
                       "la cantidad que desea"); 
            }
            else{
                 var objeto1 = new Object();
                objeto1.titulo = "Call of Duty Black Ops 2";
                objeto1.precio = "$1,210.00";
                objeto1.cantidad = cantidad;
                objeto1.total = total;
                objeto1.imagen = "call.jpg";

                var myJSON = JSON.stringify(objeto1);
                var peticion = "Juego: Call of Duty Black Ops 2 " + " Precio: $1,210.00 " 
                        + "\nCantidad solicitada: " + cantidad + " Total a pagar: $"  + total;
                if(window.localStorage){
                    localStorage.setItem(clave, myJSON);
                    alert(peticion + "\nPeticion almacenada");
                }
                else{
                    alert("Error al almacenar");
                }
            } 
    }
    function procesa3(){
        var cantidad = document.getElementById("c3").value,
            total = cantidad * 990,
            clave = "3";
    
            if(total === 0){
               alert("No puede agregar el producto si aun no especifica" +  
                       "la cantidad que desea"); 
            }
            else{
                var objeto1 = new Object();
                objeto1.titulo = "God Of War 3 ";
                objeto1.precio = "$990.00";
                objeto1.cantidad = cantidad;
                objeto1.total = total;
                objeto1.imagen = "god.jpg";

                var myJSON = JSON.stringify(objeto1);
                var peticion = "Juego: God Of War 3 " + " Precio: $990.00 " 
                        + "\nCantidad solicitada: " + cantidad + " Total a pagar: $"  + total;
                if(window.localStorage){
                    localStorage.setItem(clave, myJSON);
                    alert(peticion + "\nPeticion almacenada");
                }
                else{
                    alert("Error al almacenar");
                }
            } 
    }
    function procesa4(){
        var cantidad = document.getElementById("c4").value,
            total = cantidad * 1100,
            clave = "4";
    
            if(total === 0){
               alert("No puede agregar el producto si aun no especifica" +  
                       "la cantidad que desea"); 
            }
            else{
                var objeto1 = new Object();
                objeto1.titulo = "Halo 5: Guardians ";
                objeto1.precio = "$1,100.00";
                objeto1.cantidad = cantidad;
                objeto1.total = total;
                objeto1.imagen = "halo.jpg";

                var myJSON = JSON.stringify(objeto1);
                var peticion = "Juego: Halo 5: Guardians " + " Precio: $1,100.00 " 
                        + "\nCantidad solicitada: " + cantidad + " Total a pagar: $"  + total;
                if(window.localStorage){
                    localStorage.setItem(clave, myJSON);
                    alert(peticion + "\nPeticion almacenada");
                }
                else{
                    alert("Error al almacenar");
                }
            } 
    }
    function procesa5(){
        var cantidad = document.getElementById("c5").value,
            total = cantidad * 1300,
            clave = "5";
    
            if(total === 0){
               alert("No puede agregar el producto si aun no especifica" +  
                       "la cantidad que desea"); 
            }
            else{
                var objeto1 = new Object();
                objeto1.titulo = "Super Smash Bros ";
                objeto1.precio = "$1,300.00";
                objeto1.cantidad = cantidad;
                objeto1.total = total;
                objeto1.imagen = "smash.jpg";

                var myJSON = JSON.stringify(objeto1);
                var peticion = "Juego: Super Smash Bros " + " Precio: $1,300.00 " 
                        + "\nCantidad solicitada: " + cantidad + " Total a pagar: $"  + total;
                if(window.localStorage){
                    localStorage.setItem(clave, myJSON);
                    alert(peticion + "\nPeticion almacenada");
                }
                else{
                    alert("Error al almacenar");
                }
            } 
    }
    function procesa6(){
        var cantidad = document.getElementById("c6").value,
            total = cantidad * 350,
            clave = "6";
    
            if(total === 0){
               alert("No puede agregar el producto si aun no especifica" +  
                       "la cantidad que desea"); 
            }
            else{
                var objeto1 = new Object();
                objeto1.titulo = "Unravel";
                objeto1.precio = "$350.00";
                objeto1.cantidad = cantidad;
                objeto1.total = total;
                objeto1.imagen = "unravel.jpg";

                var myJSON = JSON.stringify(objeto1);
                var peticion = "Juego: Unravel " + " Precio: $350.00 " 
                        + "\nCantidad solicitada: " + cantidad + " Total a pagar: $"  + total;
                if(window.localStorage){
                    localStorage.setItem(clave, myJSON);
                    alert(peticion + "\nPeticion almacenada");
                }
                else{
                    alert("Error al almacenar");
                }
            } 
    }
    function procesa7(){
        var cantidad = document.getElementById("c7").value,
            total = cantidad * 720,
            clave = "7";
    
            if(total === 0){
               alert("No puede agregar el producto si aun no especifica" +  
                       "la cantidad que desea"); 
            }
            else{
                var objeto1 = new Object();
                objeto1.titulo = "Need for Speed";
                objeto1.precio = "$720.00";
                objeto1.cantidad = cantidad;
                objeto1.total = total;
                objeto1.imagen = "unravel.jpg";

                var myJSON = JSON.stringify(objeto1);
                var peticion = "Juego: Need for Speed " + " Precio: $720.00 " 
                        + "\nCantidad solicitada: " + cantidad + " Total a pagar: $"  + total;
                if(window.localStorage){
                    localStorage.setItem(clave, myJSON);
                    alert(peticion + "\nPeticion almacenada");
                }
                else{
                    alert("Error al almacenar");
                }
            } 
    }
    function procesa8(){
        var cantidad = document.getElementById("c8").value,
            total = cantidad * 420,
            clave = "8";
    
            if(total === 0){
               alert("No puede agregar el producto si aun no especifica" +  
                       "la cantidad que desea"); 
            }
            else{
                var objeto1 = new Object();
                objeto1.titulo = "Rayman Legends";
                objeto1.precio = "$420.00";
                objeto1.cantidad = cantidad;
                objeto1.total = total;
                objeto1.imagen = "rayman.jpg";

                var myJSON = JSON.stringify(objeto1);
                var peticion = "Juego: Rayman Legends " + " Precio: $420.00 " 
                        + "\nCantidad solicitada: " + cantidad + " Total a pagar: $"  + total;
                if(window.localStorage){
                    localStorage.setItem(clave, myJSON);
                    alert(peticion + "\nPeticion almacenada");
                }
                else{
                    alert("Error al almacenar");
                }
            } 
    }
    function procesa9(){
        var cantidad = document.getElementById("c9").value,
            total = cantidad * 870,
            clave = "9";
    
            if(total === 0){
               alert("No puede agregar el producto si aun no especifica" +  
                       "la cantidad que desea"); 
            }
            else{
                var objeto1 = new Object();
                objeto1.titulo = "Assassin´s Creed 4";
                objeto1.precio = "$870.00";
                objeto1.cantidad = cantidad;
                objeto1.total = total;
                objeto1.imagen = "black.jpg";

                var myJSON = JSON.stringify(objeto1);
                var peticion = "Juego: Assassin´s Creed 4 " + " Precio: $870.00 " 
                        + "\nCantidad solicitada: " + cantidad + " Total a pagar: $"  + total;
                if(window.localStorage){
                    localStorage.setItem(clave, myJSON);
                    alert(peticion + "\nPeticion almacenada");
                }
                else{
                    alert("Error al almacenar");
                }
            } 
    }
    function procesa10(){
        var cantidad = document.getElementById("c10").value,
            total = cantidad * 130,
            clave = "10";
    
            if(total === 0){
               alert("No puede agregar el producto si aun no especifica" +  
                       "la cantidad que desea"); 
            }
            else{
                var objeto1 = new Object();
                objeto1.titulo = "Team Fortress 2";
                objeto1.precio = "$130.00";
                objeto1.cantidad = cantidad;
                objeto1.total = total;
                objeto1.imagen = "team.jpg";

                var myJSON = JSON.stringify(objeto1);
                var peticion = "Juego: Team Fortress 2 " + " Precio: $130.00 " 
                        + "\nCantidad solicitada: " + cantidad + " Total a pagar: $"  + total;
                if(window.localStorage){
                    localStorage.setItem(clave, myJSON);
                    alert(peticion + "\nPeticion almacenada");
                }
                else{
                    alert("Error al almacenar");
                }
            } 
    }
    function procesa11(){
        var cantidad = document.getElementById("c11").value,
            total = cantidad * 790,
            clave = "11";
    
            if(total === 0){
               alert("No puede agregar el producto si aun no especifica" +  
                       "la cantidad que desea"); 
            }
            else{
                var objeto1 = new Object();
                objeto1.titulo = "Injustice: Gods Among Us";
                objeto1.precio = "$790.00";
                objeto1.cantidad = cantidad;
                objeto1.total = total;
                objeto1.imagen = "injustice.jpg";

                var myJSON = JSON.stringify(objeto1);
                var peticion = "Juego: Injustice: Gods Among Us " + " Precio: $790.00 " 
                        + "\nCantidad solicitada: " + cantidad + " Total a pagar: $"  + total;
                if(window.localStorage){
                    localStorage.setItem(clave, myJSON);
                    alert(peticion + "\nPeticion almacenada");
                }
                else{
                    alert("Error al almacenar");
                }
            } 
    }
    function procesa12(){
        var cantidad = document.getElementById("c12").value,
            total = cantidad * 560,
            clave = "12";
    
            if(total === 0){
               alert("No puede agregar el producto si aun no especifica" +  
                       "la cantidad que desea"); 
            }
            else{
                var objeto1 = new Object();
                objeto1.titulo = "Outlast";
                objeto1.precio = "$560.00";
                objeto1.cantidad = cantidad;
                objeto1.total = total;
                objeto1.imagen = "outlast.jpg";

                var myJSON = JSON.stringify(objeto1);
                var peticion = "Juego: Outlast " + " Precio: $560.00 " 
                        + "\nCantidad solicitada: " + cantidad + " Total a pagar: $"  + total;
                if(window.localStorage){
                    localStorage.setItem(clave, myJSON);
                    alert(peticion + "\nPeticion almacenada");
                }
                else{
                    alert("Error al almacenar");
                }
            } 
    }
    function procesa13(){
        var cantidad = document.getElementById("c13").value,
            total = cantidad * 430,
            clave = "13";
    
            if(total === 0){
               alert("No puede agregar el producto si aun no especifica" +  
                       "la cantidad que desea"); 
            }
            else{
                var objeto1 = new Object();
                objeto1.titulo = "Minecraft";
                objeto1.precio = "$430.00";
                objeto1.cantidad = cantidad;
                objeto1.total = total;
                objeto1.imagen = "minecraft.jpg";

                var myJSON = JSON.stringify(objeto1);
                var peticion = "Juego: Minecraft " + " Precio: $430.00 " 
                        + "\nCantidad solicitada: " + cantidad + " Total a pagar: $"  + total;
                if(window.localStorage){
                    localStorage.setItem(clave, myJSON);
                    alert(peticion + "\nPeticion almacenada");
                }
                else{
                    alert("Error al almacenar");
                }
            } 
    }
    function procesa14(){
        var cantidad = document.getElementById("c14").value,
            total = cantidad * 830,
            clave = "14";
    
            if(total === 0){
               alert("No puede agregar el producto si aun no especifica" +  
                       "la cantidad que desea"); 
            }
            else{
                var objeto1 = new Object();
                objeto1.titulo = "Marvel vs Capcom 3";
                objeto1.precio = "$830.00";
                objeto1.cantidad = cantidad;
                objeto1.total = total;
                objeto1.imagen = "marvel.png";

                var myJSON = JSON.stringify(objeto1);
                var peticion = "Juego: Marvel vs Capcom 3 " + " Precio: $830.00 " 
                        + "\nCantidad solicitada: " + cantidad + " Total a pagar: $"  + total;
                if(window.localStorage){
                    localStorage.setItem(clave, myJSON);
                    alert(peticion + "\nPeticion almacenada");
                }
                else{
                    alert("Error al almacenar");
                }
            } 
    }
    function procesa15(){
        var cantidad = document.getElementById("c15").value,
            total = cantidad * 270,
            clave = "15";
    
            if(total === 0){
               alert("No puede agregar el producto si aun no especifica" +  
                       "la cantidad que desea"); 
            }
            else{
                var objeto1 = new Object();
                objeto1.titulo = "Castle Crushers";
                objeto1.precio = "$270.00";
                objeto1.cantidad = cantidad;
                objeto1.total = total;
                objeto1.imagen = "castle.jpg";

                var myJSON = JSON.stringify(objeto1);
                var peticion = "Juego: Castle Crushers " + " Precio: $270.00 " 
                        + "\nCantidad solicitada: " + cantidad + " Total a pagar: $"  + total;
                if(window.localStorage){
                    localStorage.setItem(clave, myJSON);
                    alert(peticion + "\nPeticion almacenada");
                }
                else{
                    alert("Error al almacenar");
                }
            } 
    }