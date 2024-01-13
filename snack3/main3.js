// Ciclo For
// snack 3
// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro

const frutta = ['mela', 'arancia', 'banana'];
const verdura = ['spinaci', 'broccoli'];

console.log ( frutta, verdura )

for( i = 0; i < frutta.length; i++){
    
    const elementi = ['fragole', 'zucchine', 'pere'];
    
    if (verdura.length < frutta.length){
        
        verdura.push(elementi[i]);
    }

    console.log(i);

}

