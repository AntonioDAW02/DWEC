document.addEventListener("submit",(e)=>{

    if (confirmar()) {
        limpiarBasura()
        numeroIntentos();

        if (validateNameSurname() && validateAge() && validateNif() && validateEmail()
            && validateSelect() && validateDate() && validatePhone() && validateHour()) {
            alert('Los datos han sido enviados con éxito');   
        } else {
            e.preventDefault();
        }
    } else {
        e.preventDefault();
    }   
    
});

function limpiarBasura() {
    
    document.getElementById('errores').innerHTML = '';

}

function numeroIntentos() {

    let cont = getCookie("contador");
    cont++;
    setCookie("contador", cont);
    document.getElementById('intentos').innerHTML=cont;
}

function setCookie(name, value, expire) {
    let date = new Date();
    date.setTime(date.getTime() + expire * 24 * 60 * 60 * 1000);
    expire = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expire + ";path=/";
}

function getCookie(name) {
    let nom = name + "=";
    let array = document.cookie.split(";");
    for (let i = 0; i < array.length; i++) {
      let c = array[i];
/*       console.log(c); */
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(nom) == 0) {
        return c.substring(nom.length);
      }
    }
    return "";
}

function borrar_cookie() {
    let nombre = prompt("Introduzca el nombre de la cookie a borrar");
    delete_cookie(nombre);
    ver_cookies();
  }

  function delete_cookie(nombre) {
    set_cookie(nombre, "", 0);
  }


/**2 - Transformar a mayúsculas los campos nombre y apellidos al salir del campo (onBlur)*/

document.getElementById("nombre").addEventListener("blur", toUpperCase);
document.getElementById("apellidos").addEventListener("blur", toUpperCase);

function toUpperCase() {
    let nmayus = document.getElementById("nombre").value.toUpperCase();
    let amayus = document.getElementById("apellidos").value.toUpperCase();
    document.getElementById("nombre").value = nmayus;
    document.getElementById("apellidos").value= amayus;

}

/** 3 -Función que valide nombre y apellidos. Si se produce algun error, 
 * mostrar el mensaje en el contenedor de errores y poner el foco en los 
 * campos correspondientes */

function validateNameSurname() {
     
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;

    if (nombre.length == 0 || apellidos.length == 0) {
        document.getElementById('errores').innerHTML += 'Error. La longitud del campo debe ser mayor a 0.<br>';
        //console.log('error longitud');
        return false;
    }else if ((!isNaN(nombre)) || (!isNaN(apellidos))) {
        document.getElementById('errores').innerHTML += '\nError. Los campos nombre y apellidos no pueden contener números<br>';
        //console.log('error no puede contener número');
        return false;
    }else {
        return true;
    }

    document.getElementById('nombre').focus();

}

 /** 4- Validación de edad */

 function validateAge() {
     
    let edad = document.getElementById('edad').value;

    edad = parseInt(edad);

    if (isNaN(edad)) {
        
        document.getElementById('errores').innerHTML += 'Error. La edad debe ser un número.<br>';
        //console.log('error no es número');
        document.getElementById('edad').focus();
        return false;
    } else if(edad < 0 || edad > 105){

        document.getElementById('errores').innerHTML += 'Error. La edad debe estar entre 0 y 105 años.<br>';
        //console.log('error, la edad se sale de rango');
        return false;
    }else {
        return true;
    }

}

 /** validación del nif */

function validateNif() {
    let nif = document.getElementById('nif').value;
    
    //Explicación: Debe empezar por 8 números, contener un guión y terminar por una letra mayúsculas o minúsculas.
    let regex_dni = /^[0-9]{8}[-]{1}[a-zA-Z]$/;

    if (!(regex_dni.test(nif))) {
        document.getElementById('errores').innerHTML += 'Error. El formáto del dni no es válido.<br>';
        document.getElementById('nif').focus();
        //console.log('error, formato inválido');
        return false;
    } else {
        return true;
    } 
}

/** Funcion para validar email */

function validateEmail() {
    
    /* Explicación: Debe empezar por número, letra mayúscula o minúscula y podra contener 1 o más de cada una, además de un punto, 
                    luego contendrá un "@" , a continuación letra minúscula de 1 a 30, un punto, y acábará con 2 o 3 letras minúsculas. */
    let regex = /^([0-9a-zA-Z\.]{1,})([@])([a-z]{1,30}[\.]{1,})([a-z]{2,3})$/;

    email = document.getElementById("email").value;
    
    if(!(regex.test(email)) ) {
        document.getElementById('errores').innerHTML += 'Error. El email es inválido.<br>';
        //console.log('error, email incorrecto.');
        document.getElementById('email').focus();
        return false;
    }else {
        return true;
    }

}

/** Función para validar select option */

function validateSelect() {
    let provincia = document.getElementById("provincia");
 
   if (provincia.value == 0) {
        document.getElementById('errores').innerHTML += "Error. Debe seleccionar una provincia.<br>";
        //console.log('error, selecciona una provincia.');
        provincia.focus();
        return false;
   }else {
    return true;
    }
}

/** Función para validar una fecha */

function validateDate() {

    /**Explicación: Debe comenzar por número y podran ser 1 o 2, luego una barra, otro 2 números, otra barra, y termina por 4 números */
    let regex = /^(([0-9]{1,2})([\/]*)([0-9]{1,2})([\/]*)([0-9]{4}))/;
    
    let date = document.getElementById('fecha').value;

    if (!regex.test(date)) {
        document.getElementById('errores').innerHTML += 'Error. La fecha es incorrecta.<br>';
        //console.log('error, fecha incorrecta.');
        document.getElementById('fecha').focus();
        return false;
    }else {
        return true;
    }

}

/** Función para validar un teléfono */

function validatePhone() {
    
    /**Explicación: Deben ser 9 números del 0 asl 9. */
    let regex = /^[0-9]{9}$/;
    
    let telefono = document.getElementById("telefono").value;

    if( !(regex.test(telefono)) ) {
        document.getElementById('errores').innerHTML += 'Error. El teléfono es incorrecto.<br>';
        //console.log('error, teléfono incorrecto.');
        document.getElementById('telefono').focus();
        return false;
    }else {
        return true;
    }

}

/** Función para validar una hora */

function validateHour() {
    
    /**Explicación: Debe comenzar por número y serán 1 o 2, luego 2 puntos y finalmente otro 2 números */
    let regex = /^(([0-9]{1,2})([\:]*)([0-9]{1,2})([\:]*))/;
    
    let hora = document.getElementById('hora').value;

    if (!regex.test(hora)) {
        document.getElementById('errores').innerHTML += 'Error. La hora es incorrecta.<br>';
        //console.log('error, email incorrecta.');
        document.getElementById('hora').focus();
        return false;
    }else {
        return true;
    }

}

function confirmar() {
    confirm("¿Quieres confirmar el envio?");
    return true;
}