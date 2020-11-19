/**
 * Ejercicio 1
-----------

Crea un programa que pida al usuario que elija una opción del siguiente menú:

Potencia.
Raíz.
Redondeo.
Trigonometría.
Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará el
resultado en pantalla (La potencia de X elevado a Y es: )

Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en
pantalla (La raíz de X es: )

Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el redondeo al
entero más próximo, al alta y a la baja.

Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán por pantalla
los valores trigonométricos del seno, coseno y tangente.
 */

let opcion = prompt("Introduce una de las siguientes opciones: \n1- Potencia 2- Raiz 3- Redondeo 4- Trigonometría");

while (opcion < 1 || opcion > 4) {

    prompt("Introduce una de las siguientes opciones: 1- Potencia 2- Raiz 3- Redondeo 4- Trigonometría");

}

/*if (opcion == 1) {

    let x = prompt("introduce la base");
    let y = prompt("introduce el exponente");

    let res = Math.pow(x, y);

    alert("La potencia de" + x + " elevado a " + y + " es: " + res);

} else if (opcion == 2) {

    let num = prompt("Introduce un número no negativo");

    while (num < 0) {

        prompt("Introduce un número no negativo");

    }

    let raiz = Math.sqrt(num);

    alert("La raiz de" + num + " es: " + raiz);

} else if (opcion == 3) {

    let decimal = prompt("Introduce un número decimal");

    let proximo = Math.ceil(decimal);
    let bajo = Math.floor(decimal);

    alert("Redondeo más próximo: " + proximo + "\n Redondeo a la baja: " + bajo);

} else if (opcion == 4) {

    let angulo = prompt("Introduce un ángulo entre 0 y 360");

    while (angulo < 0 || angulo > 360) {

        prompt("Introduce un ángulo entre 0 y 360");

    }

    let seno = Math.sin(angulo);
    let coseno = Math.cos(angulo);
    let tangente = Math.tan(angulo);

    alert("Seno: " + seno + "\n Coseno: " + coseno + "\n Tangente: " + tangente);

}*/

switch (opcion) {
    case '1':

        let x = prompt("introduce la base");
        let y = prompt("introduce el exponente");

        let res = Math.pow(x, y);

        alert("La potencia de" + x + " elevado a " + y + " es: " + res);

        break;

    case '2':

        let num = prompt("Introduce un número no negativo");

        while (num < 0) {

            prompt("Introduce un número no negativo");

        }

        let raiz = Math.sqrt(num);

        alert("La raiz de" + num + " es: " + raiz);

        break;

    case '3':

        let decimal = prompt("Introduce un número decimal");

        let proximo = Math.ceil(decimal);
        let bajo = Math.floor(decimal);

        alert("Redondeo más próximo: " + proximo + "\n Redondeo a la baja: " + bajo);

        break;

    case '4':

        let angulo = prompt("Introduce un ángulo entre 0 y 360");

        while (angulo < 0 || angulo > 360) {

            prompt("Introduce un ángulo entre 0 y 360");

        }

        let seno = Math.sin(angulo);
        let coseno = Math.cos(angulo);
        let tangente = Math.tan(angulo);

        alert("Seno: " + seno + "\n Coseno: " + coseno + "\n Tangente: " + tangente);

        break;

    default:
        break;
}