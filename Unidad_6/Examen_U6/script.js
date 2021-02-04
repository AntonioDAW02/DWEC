window.addEventListener('load', inicio);

function inicio() {
    document.getElementById("insertarDatos").addEventListener("click", insertarDatos);
    document.getElementById("cargarDatosXML").addEventListener("click", cargarDatosXML);
    document.getElementById("actualizarDatosXML").addEventListener("click", actualizarDatos);
    document.getElementById("cargarDatosFetch").addEventListener("click", cargarDatosFetch);
}

let xhr = new XMLHttpRequest();
let json = "";
let jsonFetch = "";

function insertarDatos() {

    if (xhr.responseText === "") {
        xhr.open("POST", "insertar_comunidad.php", true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                json = JSON.parse(xhr.responseText);
            }
        }
        console.log("Peticion XMLHttp");
        let parametros = JSON.stringify(json);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(parametros);
    }
}

function actualizarDatos() {

    if (xhr.responseText === "") {
        xhr.open("POST", "actualizar_comunidad.php", true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                json = JSON.parse(xhr.responseText);
            }
        }
        console.log("Peticion XMLHttp");
        let parametros = JSON.stringify(json);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhr.send(parametros);
    }
}

function cargarDatosXML() {

    if (xhr.responseText === "") {
        xhr.open("GET", "latest.json", true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                json = JSON.parse(xhr.responseText);
                crearTabla(json);
            }
        }
        console.log("Peticion XMLHttp");
        xhr.send(null);
    } else {
        crearTabla();
    }
}

function cargarDatosFetch() {
    if (jsonF === "") {
        fetch("https://covid-vacuna.app/data/latest.json")
            .then((response) => response.json())
            .then((data) => {
                ctrl = 1;
                jsonF = JSON.parse(JSON.stringify(data));
                generarTabla(jsonF);
            });
        console.log("prueba de petición Fetch");
    } else {
        generarTabla(jsonF);
    }
}

function crearTabla(json) {
    console.log(json);

    let table = "<tr><th>CCAA</th><th>Dosis Administradas</th><th>Dosis Entregadas</th><th>Dosis Pauta completada</th>Porcentaje Entregas<th><th>porcentaje población administrada</th><th>porcentaje poblacion completa</th></th></tr>";
    for (let i = 0; i < json.length; i++) {

        table += "<tr><td>";
        table += json[i].ccaa;
        table += "</td><td>";
        table += json[i].dosisAdministradas;
        table += "</td><td>";
        table += json[i].dosisEntregadas;
        table += "</td><td>";
        table += json[i].dosisPautaCompletada;
        table += "</td></td>";
        table += json[i].porcentajeEntregadas;
        table += "</td></td>";
        table += json[i].porcentajePoblacionAdministradas;
        table += "</td></td>";
        table += json[i].porcentajePoblacionCompletas;
        table += "</td></tr>";
    }



























    // window.addEventListener('load', function() {
    //     let select = document.querySelector("#option");
    //     let i = "";
    //     let input = document.querySelector("#input");

    //     select.addEventListener('change', function(e) {
    //         e.preventDefault();
    //         input.innerHTML = '';
    //         for (i = 0; i < select.value; i++) {
    //             createInputs();
    //         }
    //     });

    //     function createInputs() {
    //         let element = document.createElement('div');
    //         element.innerHTML = `
    //     <div class="form-group">
    //         <p>Pregunta ${i + 1}</p>
    //         <input type="text" class="form-control" />
    //     </div>
    //     `;
    //         input.appendChild(element);
    //     }
    // });





    /**
      * document.getElementById("peticionXML").addEventListener('click', () => {
        
        if (xhr.responseText === "") {
            xhr.open("GET", "listar_armas.php", true);
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4 && xhr.status == 200) {
                    json = JSON.parse(xhr.responseText);
                    generarTabla(json);
                }
            }
            console.log("Peticion XMLHttp")
            xhr.send(null);
        } else {
            generarTabla();
        }

    });
      */