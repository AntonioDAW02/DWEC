/**
 * Crea un programa que pida al usuario un número entero por pantalla y muestre:
Su valor exponencial.

El número con 4 decimales.
El número en binario.
El número en octal.
El número en hexadecimal.
Utiliza para ello los métodos del objeto Number.
Como datos de muestra, si metes 50, deberías obtener: 5e1 / 50.0000 / 00110010 / 62 / 0x32
*/

let num = prompt("Introduce un número para calcular su valor exponencial");

num = parseInt(num);

//4 decimales
let exp = num.toExponential(4);
alert("Número con 4 decimales: " + exp);


//binario
let bin = num.toString(2);
alert("Número en binario: " + bin);

//octal
let octal = num.toString(8);
alert("Número en octal: " + octal);

//hexadecimal
let hexa = num.toString(16);
alert("Número en hexadecimal: " + hexa);