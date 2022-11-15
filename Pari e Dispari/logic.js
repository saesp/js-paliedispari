// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto


// chiediamo a user se vuole pari o dispari
const evenOddUser = prompt("pari o dispari?");
console.log(evenOddUser);

// chiedere a user un numero da 1 a 5
const numUser = parseInt(prompt("scrivi un numero da 1 a 5"));
console.log("Num user:", numUser);

// generare numero random da 1 a 5 per Pc con funzione
function randomNum(){
    let numPc = Math.floor(Math.random() * 5) + 1;
    console.log("Num pc:", numPc)

    return numPc;
}

// sommiamo num User e Pc
let sumNum = numUser + randomNum();
console.log("Sum:", sumNum);

// stabilire se la somma è pari o dispari con funzione
function evenOddFunction(){
    if (sumNum % 2 === 0){
        return "pari";

    } else {
        return "dispari"
    }
}

let evenOdd = evenOddFunction();
console.log(evenOdd);

// stabilire il vincitore
if (evenOddUser == evenOdd){
    console.log("Hai vinto");
} else{
    console.log("Hai perso");
}