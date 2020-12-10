document.getElementById("enviar").addEventListener("click", validate(), false);

function validate() {
    if (validateName() && validateYear() && validateHab() && 
    validateTirada() && validateSelect() && validatePassword()) {
        let cookie = document.cookie = Math.floor(Math.random() * 6);
        document.getElementById("ultima_tirada").innerHTML = cookie;
    } else {

    }
}

function validateName() {

    let name = document.getElementById("name").value;

    if (name == "") {
        document.getElementById("errores").innerHTML = "Error. El campo nombre no puede estar vacío";
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("name").onfocus;
        return false;
    } else if (isNaN(name)) {
        document.getElementById("errores").innerHTML = "Error. El nombre no puede ser un número";
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("name").onfocus;
        return false;
    }
    document.getElementById("name").style.borderColor = "green";
    return true;
    
}

function validateYear() {

    let year = document.getElementById("anyo").value;

    if (!isNaN(year)) {
        if (year < 700 || year > 8000) {
            document.getElementById("errores").innerHTML = "Error. EL año debe estar comprendido entre 700 y 8000 ambos incluidos";
            document.getElementById("anyo").style.borderColor = "red";
            return false;
        }
        document.getElementById("errores").innerHTML = "Error. El año tiene que ser un número";
        document.getElementById("anyo").style.borderColor = "red";
        document.getElementById("anyo").onfocus;
        return false;
    }
    document.getElementById("anyo").style.borderColor = "green";
    return true;
}

function validateHab() {

    let hab = document.getElementById("habilidad").value;

    //Debe de cumplir alguna de las condiciones.

    let regex = /^(M|WS|BS|S|T|W|A|Ld|Sv)$/;

    if (!regex.test(hab)) {
        document.getElementById("errores").innerHTML = "Error. El campo debe cumplir el siguiente formato: 'F?R99'";
        document.getElementById("habilidad").style.borderColor = "red";
        document.getElementById("habilidad").onfocus;
        return false;
    }
    document.getElementById("habilidad").style.borderColor = "green";
    return true;
}

function validateTirada() {

    let tirada = document.getElementById("tirada").value;

    //Debe de cumplir que lleve F, seguida que alguno de los carácteres, luego una R y un número aleatorio de 0 a 100
    let regex = /^(([F]{1})(<|>|=|x2{1})([R]{1}[0-100]{2}))$/;
    //^(([F]{1})([<]|[>]|[=]|[x2]{1})([R]{1}[0-100]{2}))$

    if (!regex.test(tirada)) {
        document.getElementById("errores").innerHTML = "Error. El campo debe cumplir el siguiente formato: 'F?R99'";
        document.getElementById("tirada").style.borderColor = "red";
        document.getElementById("tirada").onfocus;
        return false;
    }
    document.getElementById("tirada").style.borderColor = "green";
    return true;
}

function validateSelect() {

    let rol = document.getElementById("rol").selectedIndex;

    if (rol == null || rol == 0) {
        document.getElementById("errores").innerHTML = "Error. Debe seleccionar una opción.";
        document.getElementById("rol").style.borderColor = "red";
        document.getElementById("rol").onfocus;
        return false;
    }
    document.getElementById("rol").style.borderColor = "green";
    return true;
}

function validatePassword() {

    let pass = document.getElementById("pass").value;
    //Debe cumplir que empiece por 2 letras mayúsculas, seguido de cualquier carácter no alfanumérico ni ':' y terminar por dos numeros del 0 al 9.
    let regex = /^(([A-Z]{2})([^:\/w])([A-Za-z]{8,})([#])([0-9]{2}))$/;

    if (!regex.test(pass)) {
        document.getElementById("errores").innerHTML = "Error. La contraseña debe cumplir con lo siguiente: 1. Dos letras mayúsculas al inicio" +
            "2. Un carácter que no sea alfanumérico ni el carácter dos puntos ( : )"
        "3. Una palabra de mínimo 8 caracteres de largo, 4 .El símbolo almohadilla (#)"
        "Dos números";
        document.getElementById("pass").style.borderColor = "red";
        document.getElementById("pass").onfocus;
        return false;
    }
    document.getElementById("pass").style.borderColor = "green";
    return true;
}