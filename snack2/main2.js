// Ciclo While
// snack 2
// genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale


const numeroCasuale = Math.floor(Math.random() * 100) + 1;

let numeroIndovinato;

while (numeroIndovinato !== numeroCasuale) {
    numeroIndovinato = parseInt(prompt("Indovina il numero tra 1 e 100:"));

    if (numeroIndovinato > numeroCasuale) {
        alert("Il numero è troppo alto. Prova di nuovo!");
    } else if (numeroIndovinato < numeroCasuale) {
        alert("Il numero è troppo basso. Prova di nuovo!");
    } else {
        alert("Complimenti! Hai indovinato il numero!");
    }
}