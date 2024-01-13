// Ciclo For
// snack 4
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let numero = prompt("Inserisci un numero");

numero = parseInt(numero);

for (let i = 0; i < numero.toString().length; i++) {
    let cifra = parseInt(numero.toString()[i]);

    if (cifra % 2 === 0) {
        console.log(cifra);
    } else {
        console.log(cifra + 1);
    }
}











