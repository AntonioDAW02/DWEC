/**
 * Escribe un programa que muestre por pantalla una tabla de multiplicar, sumar y dividir.
 * En primer lugar se le pedirá al usuario que introduzca un número entre 2 y 10.
 * Si el número no está entre estos dos valores, se le seguirá pidiendo hasta que introduzca
 * el valor correcto.
 * Mostrará la tablas de multiplicar, sumar y dividir, utilizando los tres tipos de bucles
 * que hay en JavaScript.
 * (para cada tabla, un tipo de bucle diferente).
 */

var num = prompt("Escribe un número entre 2 y 10");

document.write("Tabla de multiplicar: <br>");
while (num < 2 || num > 10) {
    num = prompt("Escribe un número entre 2 y 10");
}

//Muestra la tabla de multiplicar del número introducido por el usuario.
for (i = 1; i <= 10; i++) {
    document.write(num + "x " + i + " = " + num * i + "<br>");
}

var i = 1;

document.write("Tabla de sumar: <br>");
//Muestra la tabla de sumar el número introducido por el usuario.
while (i <= 10) {
    document.write(num + " + " + i + " = " + num * i + "<br>");
    i++;
}

document.write("Tabla de dividir:<br>");

i = 1;

do {
    document.write(num + " / " + i + " = " + num / i + "<br>");
    i++;
} while (i < 10);