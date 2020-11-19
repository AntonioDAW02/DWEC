function mostrarCadena() {
    let cadena = document.getElementById('cadena').value;
    let res = Array.from(cadena);
    let aleat = Math.floor(Math.random() * 2);

    document.getElementById("resultado").innerHTML = res;
}