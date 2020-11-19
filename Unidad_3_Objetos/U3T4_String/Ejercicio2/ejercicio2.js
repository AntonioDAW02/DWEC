/**
 * Crea un programa que pida al usuario una propuesta de contraseña y
 * compruebe si cumple con los siguientes requisitos.

Tiene entre 8 y 16 caracteres.
Tiene una letra mayúscula.
Tiene una letra minúscula.
Tiene un número.
Tiene uno de los siguientes valores: guión alto, guión bajo, arroba,  
almohadilla, dólar, tanto por ciento o ampersand.
Si cumple con todos los requisitos se considera una contraseña segura,
de lo  contrario mostrará que es una contraseña no segura.
 */

let password;

// let numeros = "1234567890";
// let minus = "abcdefghijklmnñopqrstuvwxyz";
// let mayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
// let ext = "|@#~½¬{$%&/?¿";

let mayus = false;

//Correcion en video.

do {

    password = prompt("Introduzca una contraseña segura");

    for (let i = 0; i < password.length; i++) {

        if (password.charAt[i].toUpperCase() === password.charAt[i]) {
            mayus = true;
            break;
            //console.log("Contiene mayuscula");
        }

    }

    if (!mayus) {
        console.log("La contraseña no es segura")
    }

} while (password.length < 8 || password.length > 16 || !mayus);





// while (password.length < 8 || password.length > 16) {
//     prompt("Introduzca una contraseña segura");
// }