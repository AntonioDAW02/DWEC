var nombre = prompt("¿Cómo te llamas?");
var edad = prompt("¿Cuántos años tienes?");

if (edad < 18) {
    alert("Hola " + nombre + "\nEres menor de edad y has vivido " + edad * 365);
} else {
    alert("Hola " + nombre + "\nEres mayor de edad y has vivido " + edad * 365);
}