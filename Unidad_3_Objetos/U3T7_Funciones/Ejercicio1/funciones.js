/**
 * Crea un archivo funciones.js en el que implementes las funciones  
 * siguientes (busca la fórmula en Internet):
   - Imc (Índice de masa corporal)

   - Fcm (Frecuencia cardíaca máxima)

   Crea un html donde incluyas el archivo anterior y dos enlaces.
   Cada uno  (mediante el método onClick) ejecutará una función.
   Deberás tener 3 inputs donde introducir los datos necesarios para las funciones.
*/

function calcularIMC() {

    let peso = document.getElementById("peso").value;
    let alt = document.getElementById("alt").value;

    imc = peso / (alt * alt);

    document.write("El imc es de " + imc);

}

function frecuenciaCardMax() {

    let edad = document.getElementById("edad").value;

    let fcMax = 209 - (0, 7 * edad);

    document.write("Su frecuencia cardiaca máxima es: " + fcMax);

}