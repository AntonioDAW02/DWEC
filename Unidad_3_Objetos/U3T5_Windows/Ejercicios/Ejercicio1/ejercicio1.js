/**
 * Crea un programa que tenga botones para permitir modificar las siguientes propiedades de una  ventana:
 - Abrir una ventana nueva:
    Debes preguntar al usuario si está de acuerdo o no, y solo si acepta se abrirá la nueva ventana.
    La nueva ventana tendrá las siguientes propiedades: no tendrá barra de herramientas, ni location, 
    ni barra de  menú, ni será redimensionable. Tendrá 200x80 píxeles y se posicionará en 500x500 píxeles.
    La nueva ventana incluirá un pequeño texto y un botón que al hacer clic cerrará la ventana.
 - Cerrar la ventana creada: si la ventana está cerrada mostrará un mensaje de error.
 - Mover la ventana 10 píxeles a la derecha y abajo.
 - Mover la ventana a la posición 100,100.
 - Aumentar el tamaño de la ventana 10 píxeles de ancho y largo.
 - Aumentar el tamaño de la ventana a 400x200.
 - Colocar el scroll de la ventana arriba del todo
 - Colocar el scroll de la ventana a 10 píxeles de la parte superior.
 - Todos los botones, excepto el primero y el segundo, los puedes programar diréctamente mediante la  propiedad onclick,
    por ejemplo:<input type=“button” value=“Imprimir” onClick=“print()”/>
 */

var miVentana;
let modPrograma;

let opcion = confirm("¿Quiere abrir una nueva ventana?");

if (opcion) {
    miVentana = window.open("", "miVentana", "width=200,height=100, top=300, left=200, location=no, menubar=no");

    miVentana.document.write("<p>Hola, esta es la ventana de Antonio. Esta ventana ha sido realizada con el objeto window y el método open</p><input type='button' value='Cerrar Ventana' onclick='window.close()' />");
}

function cerrarVentana() {
    if (!miVentana.closed) {
        miVentana.close();
    } else {
        document.getElementById("mensaje").innerHTML = "La ventana estaba cerrada";
    }
}

function moverVentana() {
    miVentana.moveBy(10, 10);
}

function mover_100x100() {
    console.log("mover_100x100px");
    miVentana.moveTo(100, 100);
}

function aumentar() {
    miVentana.resizeBy(10, 10);
}

function aumentar2() {
    miVentana.resizeTo(400, 300);
}

function descender() {
    miVentana.scrollBy(0, 10);
}

function scroll2() {
    miVentana.scrollTo(0, 0);
}