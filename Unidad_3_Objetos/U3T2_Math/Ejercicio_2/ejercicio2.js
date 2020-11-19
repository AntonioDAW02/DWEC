/**
 * Ejercicio 2
-----------

Crea un programa que pida al usuario el valor del radio y muestre por pantalla:

El valor del radio.
El valor del diámetro.
El valor del perímetro de la circunferencia.
El valor del área del círculo.
El valor del área de la esfera.
El valor del volumen de la esfera.
El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente.
Debes escribir al lado si son cm, o cm2, o cm3.
Como datos de muestra, si metes 5, deberías obtener aproximadamente: 5 / 10 / 31,41 /
78,54 / 314,15 / 523,59.

*/

let radio = prompt("Introduce el radio");
let diametro = radio*2;
let perimetro = 2*Math.PI*radio;
let areac = Math.PI*Math.pow(radio, 2);
let areae = 4*Math.PI*Math.pow(radio, 2);
let volumene = 4/3*Math.PI*Math.pow(radio, 3);


 alert("Radio: " + radio);
 alert("diámetro: " + diametro);
 alert("peímetro: " + perimetro);
 alert("Área círculo: " + areac);
 alert("Área esfera: " + areae);
 alert("Volumen esfera: " + volumene);
