function dividirCadena() {
    let cadena = document.getElementById('cadena').value;
    let parte1 = cadena.split('|');
    let parte2 = parte1[0].split('@');
    let parte3 = parte2[0].split(':');

    document.getElementById('municipio').innerHTML = "Municipio: " + parte3[0];
    document.getElementById('letrasParcela').innerHTML = "Letra: " + parte3[1].substr(0, 4);
    document.getElementById('numParcela').innerHTML = "Numeros: " + parte3[1].substr(5, 8);
    document.getElementById('nombreApellidos').innerHTML = "Nombre y apellidos: " +
        parte2[1] + " " + parte1[2];

}