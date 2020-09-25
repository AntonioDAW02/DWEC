/*Crea un programa en el que crees 4 variables de tipo cadena con los
 * siguientes valores: “Hola”, “7”, “13”, y “Adios”.
 */
var var1 = "Hola";
var var2 = "7";
var var3 = "13";
var var4 = "Adios";

//Muestra en un alert una frase que incluya comillas simples.
alert("\n'" + var1 + "'");

//Muestra en un alert que ocupe una línea las variables 1ª y 4ª separadas por  un salto de línea.
alert(var1 + "\n" + var4);

//Muestra en un alert la suma de las variables 2ª y 3ª.
alert(var2.concat(var3));

//Muestra en un alert la suma de todas las variables.
alert(var1.concat(var2, var3, var4));