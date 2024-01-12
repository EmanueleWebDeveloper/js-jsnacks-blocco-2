// Ciclo While
// snack 1:
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50

const numbers = [];
let somma = 0;

while (somma < 50) {
    const numeroInserito = prompt("Inserisci un numero:");
    const numero = parseFloat(numeroInserito);

    if (isNaN(numero)) {
        alert("Inserisci un numero valido.");
    } else {
        numbers.push(numero);
        somma += numero;
    }
}

console.log("Array completo:", numbers);
console.log("Somma degli elementi:", somma)
