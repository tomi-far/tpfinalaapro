function calcularEnvio(){
let distancia = prompt("Ingrese su distancia a San Nicolás en km.");

while(distancia<=0){distancia = prompt("El valor ingresado no es válido. Por favor, inténtelo nuevamente.");}
if(distancia>0 && distancia<=40){alert("¡El envío es gratuito!");}
else if(distancia>40 && distancia<=100){alert("El envío tendrá un costo de $800.");}
else if(distancia>100){
    let kmExtra = distancia-100;
    let costoNuevo = 800 + kmExtra;
    alert("El envío tendrá un costo de $" + costoNuevo + ".");
}
else{alert("El valor ingresado no es un número. Recargue la página e inténtelo nuevamente.")}}