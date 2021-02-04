window.addEventListener("load", iniciar);

function iniciar() {
    document.getElementById("xml").addEventListener("click", mostrarxml);
}

function mostrarxml() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let armas = JSON.parse(this.responseText);
            cargarJSON(armas);
        }
    };
    xhr.open("GET", "listar_armas.php", true);
    xhr.send();
}

function cargarJSON(armas) {

    let body = document.getElementsByTagName("body")[0];
    let table = document.createElement("table");
    let tblBody = document.createElement("tbody");

    for (let i = 0; i < 2; i++) {

        let fila = document.createElement("tr");

        for (let j = 0; j < 2; j++) {
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");

            let textoCelda5 = document.createTextNode(armas[i].idArma);
            let textoCelda1 = document.createTextNode(armas[i].nombre);
            let textoCelda2 = document.createTextNode(armas[i].descripcion);
            let textoCelda3 = document.createTextNode(armas[i].imagen);
            let textoCelda4 = document.createTextNode(armas[i].bando);

            td1.appendChild(textoCelda1);
            td2.appendChild(textoCelda2);
            td3.appendChild(textoCelda3);
            td4.appendChild(textoCelda4);
            td4.appendChild(textoCelda5);
            fila.appendChild(td5);
            fila.appendChild(td1);
            fila.appendChild(td2);
            fila.appendChild(td3);
            fila.appendChild(td4);
        }
        tblBody.appendChild(fila);
    }

    table.appendChild(tblBody);
    body.appendChild(table);
    table.setAttribute("border", "2");

    document.getElementById("resultado").innerHTML = table;
}