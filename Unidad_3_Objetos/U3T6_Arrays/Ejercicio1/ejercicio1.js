/*

Cuando el usuario cargue la página, se cargará un prompt donde se mostrarán (en el prompt,
no en la página) las opciones:

Mostrar número de países.
Mostrar listado de países (y le preguntará si quiere mostrarlos en el orden que se encuentran en el array, del revés u ordenados alfabéticamente).
Mostrar un intervalo de países (y le pedirá que introduzca el intervalo en formato inicio-fin; luego deberás extraer el valor inicio y fin).
Añadir un país (y le preguntará si quiere añadir al principio o al final).
Borrar un país (y le preguntará si quiere borrar al principio o al final).
Consultar un país (y le preguntará si quiere consultar por posición o por nombre).
Todas las operaciones que se realicen se irán mostrando en la página con su título.
*/

//Creamos un array.
var paises = ["España", "Francia", "Italia", "Bégica", "Alemania"];

let opcion = prompt(
    "1 - Mostrar número de países \n 2 - Mostrar listado de países (y le preguntará si quiere mostrarlos en el orden que se encuentran en el array, del revés u ordenados alfabéticamente). \n 3 - Mostrar un intervalo de países (y le pedirá que introduzca el intervalo en formato inicio-fin; luego deberás extraer el valor inicio y fin). \n 4 - Añadir un país (y le preguntará si quiere añadir al principio o al final). \n 5 - Borrar un país (y le preguntará si quiere borrar al principio o al final). \n 6 - Consultar un país (y le preguntará si quiere consultar por posición o por nombre). "
);

let opc = parseInt(opcion);

switch (opc) {
    case 1:
        //Mostrar el número de elementos del array.

        let num = paises.length;

        document.write("El array tiene " + num + "</> elementos.<br>");
        break;

    case 2:
        //Mostrar ordenado normal, al revés o alfabéticamente.

        let opcionc2 = prompt(
            "1 - Listar array normal \n 2 - Listar array al revés \n 3 - Listar array alfabéticamente"
        );

        opcc2 = parseInt(opcionc2);

        switch (opcc2) {
            case 1:
                document.write("Paises: <br>" + paises);
                break;

            case 2:

                let reverso = paises.reverse();
                document.write("Paises al revés: <br>" + reverso);

                break;

            case 3:

                let ordenalfa = paises.sort();
                document.write("Paises ordenados alfabéticamente: <br>" + ordenalfa);

                break;


            default:
                break;
        }

        break;

    case 3:
        //Mostrar intervalo de paises.

        let inicio = prompt("Introduce la posición de inicio");
        let fin = prompt("Introduce la posición final");

        let int = paises.slice(inicio, fin);

        document.write(int);

        let elinicio = paises[inicio];
        let elfinal = paises[fin];

        document.write("<br>Valor de inicio: " + elinicio + "<br> Valor final: " + elfinal);

        break;

    case 4:
        //Añadir pais al inicio o al final.

        let opcc4 = prompt("1 - Añadir elemento al inicio \n 2 - Añadir elemento al final");
        let opcionc4 = parseInt(opcc4);

        switch (opcionc4) {
            case 1:

                document.write("Añadir un nuevo elemento al principio:<br>");
                paises.unshift("Suecia");
                document.write(paises);

                break;

            case 2:

                document.write("Añadido un nuevo elemento al final:<br>");
                paises.push("Noruega");
                document.write(paises);

                break;

            default:

                break;
        }

        break;

    case 5:
        //Borrar un elemento del inicio o del final.

        let opcc5 = prompt("1 - Borrar elemento al inicio \n 2 - Borrar elemento al final");
        let opcionc5 = parseInt(opcc5);

        switch (opcionc5) {
            case 1:

                document.write("Borrar un elemento del principio:<br>");
                document.write("Se ha borrado " + paises[0] + "<br>");

                paises.shift();
                document.write(paises);

                break;

            case 2:

                document.write("Borrar un elemento del final:<br>");

                let num = paises.length;
                document.write("Se ha borrado " + paises[num - 1] + "<br>");

                paises.pop();
                document.write(paises);

                break;

            default:

                break;
        }

        break;

    case 6:
        //Consultar un país por posición o por nombre.

        let opcc6 = prompt("1 - Consultar pais por  posición \n 2 - Consultar pais por nombre");
        let opcionc6 = parseInt(opcc6);

        switch (opcionc6) {
            case 1:

                let posUsu = prompt("Introduce la posición y te diré el país");
                let pais = paises[parseInt(posUsu)];

                document.write("En la posición indicada se encuentra: " + pais);

                break;

            case 2:

                let paisUsu = prompt("Introduce el país y te diré la posición:");
                let pos = parseInt(paises.indexOf(paisUsu));

                document.write("El país introducido se encuentra en la posición: " + pos);

                break;

            default:

                break;
        }

        break

    default:
        break;
}