// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Dare output relativo

// chiedere parola all utente
const wordUser = prompt("Inserisci una parola");
console.log(wordUser);

// creare funzione
function palindrome(word){
    let wordLen = word.length;
    let wordPal = Math.floor(wordLen/2);

    for (let i = 0; i < wordPal; i++) {
        if (word[i] !== word[wordLen - 1 - i]){
            return false;
        }
    }
    
    return true;
}

// vedere se la parola user è palindroma
const resultPal = palindrome(wordUser);
console.log(resultPal);