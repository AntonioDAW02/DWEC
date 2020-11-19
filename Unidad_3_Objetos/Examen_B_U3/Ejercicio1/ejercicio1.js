function Carta(palo, valor) {
    palo = "";
    valor = "";

    this.constructor = function(palo, valor) {
        this.palo = palo;
        this.valor = valor;
    }

    this.darValor = function(palo, valor) {
        this.palo = palo;
        this.valor = valor;
    }

    this.toString = function() {
        document.write('Carta: ' + this.valor + " " + this.palo);
    }
}

function Baraja(baraja) {
    this.baraja = baraja;

    for (let i = 0; i < baraja.length; i++) {

        do {
            baraja.push(new Carta());
        } while (baraja.length <= 40);

    }
}

let carta1 = new Carta("Oro", "rey");

document.getElementById('resultado').innerHTML = carta1.darValor();
document.getElementById('resultado').innerHTML = carta1.toString();