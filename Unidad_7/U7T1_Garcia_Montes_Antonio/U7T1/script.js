window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("guardar").addEventListener("click", guardarProducto)
    document.getElementById("borrar").addEventListener("click", borrar)
    document.getElementById("refrescar").addEventListener("click", refrescarTextArea)
    document.getElementById("comprobar_compatibilidad").addEventListener("click", comprobar_compatibilidad)
}

function guardarProducto() {
    let clave = document.getElementById('clave').value;
    let valor = document.getElementById('valor').value;
    let almacenamiento = document.getElementById("almacenamiento");

    if (clave === '' || valor === '') {
        alert("Error. debe introducir los campos clave y valor");
    } else {
        if (almacenamiento.value === 'local') {
            console.log("estoy dentro");
            localStorage.setItem(clave, valor);
            refrescarTextArea();
        } else {
            sessionStorage[clave] = valor;
            refrescarTextArea();
        }
    }
}

function refrescarTextArea() {
    let almacenamiento = document.getElementById("almacenamiento");
    let datosDisponiblesLS = document.getElementById("datosDisponiblesLS").value;
    datosDisponiblesLS = "";

    if (almacenamiento === 'local') {
        for (let i = 0; i < localStorage.length; i++) {
            let clave = localStorage.key(i);
            let valor = localStorage.getItem(clave);
            datosDisponiblesLS.innerHTML += " Clave: " + clave + " Valor: " + valor+"\n";
        }
    } else {
        for (let i = 0; i < sessionStorage.length; i++) {
            let clave = sessionStorage.key(i);
            let valor = sessionStorage.getItem(clave);
            datosDisponiblesSS.innerHTML += " Clave: " + clave + " Valor: " + valor+"\n";
        }
    }
}

function borrar() {
    let clave = document.getElementById('clave').value;

    if (clave === "") {
        alert("Error, debe introducir una clave porfavor.")
    } else {
        if (almacenamiento.value === 'local') {
            if(localStorage.getItem(clave) == null ){
                alert("Error, no exite una clave con el valor introducido, almacenada de forma Local");
            }else{
                localStorage.removeItem(clave);
                refrescarTextArea();
            }
        } else {
            if(sessionStorage.getItem(clave) == null ){
                alert("Error, no existe ninguna clave con el valor introducido, almacenada de forma Session");
            }else{
                sessionStorage.removeItem(clave);
                refrescarTextArea();
            }
        }
        refrescarTextArea(); 
    }
}

function comprobar_compatibilidad() {
    if(typeof(Storage) !== "undefined") {

        document.getElementById('compatibilidad').innerHTML = "El navegador es compatible con el LocalStorage y SessionStorage.";

    }
}