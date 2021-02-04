document.getElementById("fetch").addEventListener("click", mostrarfetch);

function mostrarfetch() {
    // console.log("prueba");
    fetch("http://localhost:8090/Entregable_U6/listar_armas.php")
        .then((response) => response.json()).then((data) => {

            let armas = JSON.parse(JSON.stringify(data));
            let tabla = "<table><tr><th>NOMBRE</th><th>DESCRIPCIÓN</th><th>IMÁGEN</th><th>BANDO</th></tr>";
            let selected = document.getElementById("bando").value;

            for (const arma of armas) {

                if (arma.bando == "1" && selected == "Aliados") {
                    tabla += "<tr><td>";
                    tabla += arma.nombre;
                    tabla += "</td><td>";
                    tabla += arma.descripcion;
                    tabla += "<td><img src='img/";
                    tabla += arma.imagen;
                    tabla += "'></td><td>";
                    tabla += "aliados";
                    tabla += "</td></tr>";

                } else if (arma.bando == "2" && selected == "Eje") {

                    tabla += "<tr><td>";
                    tabla += arma.nombre;
                    tabla += "</td><td>";
                    tabla += arma.descripcion;
                    tabla += "</td>";
                    tabla += "<td><img src='img/";
                    tabla += arma.imagen;
                    tabla += "'></td>";
                    tabla += "<td>";
                    tabla += "eje";
                    tabla += "</td></tr>";
                }

            }
            tabla += "</table>";
            document.getElementById("resultado").innerHTML = tabla;
        })
        .catch((err) => console.log(err));

}