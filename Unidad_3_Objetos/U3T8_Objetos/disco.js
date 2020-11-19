function Disco() {

    this.nombre = "";
    this.grupo = "";
    this.anyo = "";
    this.tipoMusica = "";
    this.localizacion = 0;
    this.prestado = false;

    //Método que permita incluir las 5 primeras propiedades.
    //La propiedad prestado seguirá a false.

    insertarProp = function insertarProp(nombre, grupo, anyo, tipoMusica, localizacion) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.anyo = anyo;
        this.tipoMusica = tipoMusica;
        this.localizacion = localizacion;
    }

    //Método que permita cambiar el número de la estantería en la localización.

    cambiarLoc = function cambiarLoc(loc) {
        this.loc = loc;
    }

    //Método que cambie la propiedad prestado.

    cambPrestado = function cambPrestado(prestado) {
        this.prestado = prestado;
    }

    //Método que muestra toda la información de los discos.

    mostrarInfoDisco = function mostrarInfoDisco(d) {
        return (
            "Nombre: " + this.nombre,
            "\nGrupo: " + this.grupo,
            "\nAño: " + this.anyo,
            "\nTipo de música: " + this.tipoMusica,
            "\nLocalización: " + this.localizacion
        );
    }

}

let disco1 = new Disco();