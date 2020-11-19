/* Haz una página web que implemente un juego de encontrar un número aleatorio bajo las premisas que se explican a continuación:

 * La página calculará un número del 1 al 100.
 * Luego preguntará al usuario por el número mediante un prompt.
 * Si el usuario escribe algo que no es un número se indica el error y se vuelve a pedir el número.
 * Si el número escrito por el usuario es correcto, se indica que se acertó y finalizaremos el juego.
 * Si no, le dice si el número es menor o mayor y vuelve a preguntar cuál es.
 * Si se cancela cualquier cuadro, el juego termina indicando que se canceló el juego.
 * Al final, si se ha finalizado correctamente el juego se indica el número de intentos.
 * Se permite volver a jugar al usuario mediante un cuadro de confirmación
*/

let cont = 0;
let exit = false;
let aleat = Math.floor(Math.random() * (100 - 1)) + 1;
let res;
var num_usu = prompt("Introduce un número aleatorio del 1 al 100, ámbos incluidos.");

//console.log(aleat);

while (num_usu != aleat) {
    while (isNaN(num_usu) || num_usu < 1 || num_usu > 100) {
        alert("Error. Has introducido un número no válido o no era un número");
        num_usu = prompt(
            "Introduce un número aleatorio del 1 al 100, ámbos incluidos."
        );

        num_usu = parseInt(num_usu);

        cont++;
    }
    //var tipo = typeof(num_usu);
    //console.log(tipo);

    if (num_usu < aleat) {
        alert("El número aleatorio es mayor");
    } else if (num_usu > aleat) {
        alert("El número aleatorio es menor");
    }

    num_usu = prompt("Introduce un número aleatorio del 1 al 100, ámbos incluidos.");

    num_usu = parseInt(num_usu);

    cont++;
}

if (aleat === num_usu) {
    alert("Acertaste el número!");
    alert("Numero de intentos: " + cont);

    res = confirm("¿Quieres continuar?");

    if (res === true) {
        alert("You pressed OK!");
    } else {
        alert("You pressed Cancel!");
    }
}