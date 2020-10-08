function validarDNI() {

    let cadena = "TRWAGMYFPDXBNJZSQVHLCKE";
    let num = document.getElementById("numero").value;
    let letra = document.getElementById("letra").value;
    let letraCorrecta = cadena.charAt(num % 23);

    if (num === '') {
        alert("dni vacío");
    } else if (isNaN(num)) {
        alert("DNI inválido");
    } else if (num.length != 8) {
        alert("El dni debe contener 8 números");
    } else if (letra != letraCorrecta) {
        alert("Letra inválida. La letra deberia ser : " + letraCorrecta);
    } else {
        alert("DNI válido.");
    }

}