var edad= prompt("Ingrese la edad");
const precioBase=1000000;

if (edad<0) {
    alert("Edad no valida")
} else if (edad<2){
    alert("La persona tiene prohibido viajar")
} else if (edad>=2 && edad<5){
    alert("El tiquete sale gratis")
} else if (edad >=5 && edad<11){
    alert("El valor a pagar es: $"+precioBase/2)
} else if (edad>=11 && edad<15) {
    alert("El valor a pagar es: $"+ precioBase*0.75)
} else {
    alert("El valor a pagar es: $"+precioBase)
}