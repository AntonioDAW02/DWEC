enviar.addEventListener("click", () => {

    let body = document.querySelector("body");
    let table = document.createElement("table");
    let separate = document.createElement("hr");

    if (document.querySelector('table')) {
        document.querySelector('hr').remove();
        document.querySelector('table').remove();
    }
    
    body.appendChild(separate);

    let borderW = document.getElementById("grosor").value;
    let color = document.getElementById("color").value;

    if (borderW !== "" ) {
        table.style.border = borderW + "px " + color;
    }

    let num_filas = document.getElementById("filas").value;
    let num_columnas = document.getElementById("columnas").value;
    let check_header = document.getElementById("header");
    let texto = document.createTextNode(check_header);

    if (num_filas !== "" && num_columnas !== "" && borderW !== "") {
        for (let i = 0; i < num_filas; i++) {
            let fila = document.createElement("tr");
            table.appendChild(fila);
            
            for (let j = 0; j < num_columnas; j++) {
                if (check_header.checked && i === 0) {
                    
                    let encabezado = document.createElement("th");
                    encabezado.style.border = borderW + "px solid" + color;
                    
                    fila.appendChild(encabezado);

                    encabezado.appendChild(texto);

                } else {

                    let columna = document.createElement("td");
                    fila.appendChild(columna);
                    columna.appendChild(texto);
                    
                    columna.style.border = borderW + "px solid" + color;

                }
               
            }
        }
    
    }

    body.appendChild(table);
    body.appendChild(separate);

})