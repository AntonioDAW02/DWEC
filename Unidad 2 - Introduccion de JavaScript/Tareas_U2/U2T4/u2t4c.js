/**
 * El script nos pedirá el radio y la altura de un cilindro y mostrará su volumen.
 * La fórmula es:  .V=PI * r * r * h
 * (Puedes usar el valor 3.14 para la constante PI )
 */

var r = prompt("Introduce el radio de la circunferencia en cm");
var h = prompt("Introduce la altura en cm");

var vol = 3.14 * r * r * h;

console.log(vol);