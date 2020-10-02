var texto = "";
var noPrimos = 0;

for (let i = 1; i <= 500; i++) {
    if (i % 3 == 0) {
        texto += "El número  " + i + " es multiplo de 3\n";
    }
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            noPrimos++;
            break;
        }
    }
}

console.log(texto);
texto += "Número de números no primos: " + noPrimos;
console.log(texto);