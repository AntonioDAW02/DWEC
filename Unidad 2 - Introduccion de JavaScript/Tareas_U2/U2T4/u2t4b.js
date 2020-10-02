/**
 * Vamos a realizar un script que nos diga si un material flota
 *  o se hunde dependiendo de su densidad medida en gr/cm3.

El script, como ayuda al usuario, mostrará ejemplos de distintas 
densidades y realizará la pregunta “Qué densidad tiene el material elegido”:
 */

var var1 = prompt("¿Qué densidad tiene el material elegido?");

if (var1 < 1) {
    console.log("EL material flotará en el agua");
} else {
    console.log("EL material se hunde en el agua");
}