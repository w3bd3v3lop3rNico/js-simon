// - viasualizzare in pagina un alert con 5 numeri
//     - dichiarare una variabile che contenga un array vuoto
const scoreDOMElement = document.querySelector(".score");
console.log(scoreDOMElement)
const numbersArray = [];

const arrayGenerator = getArrayRandom(1, 50, 5);

console.log(numbersArray);
alert(numbersArray);

//     - dichiarare una funzione che generi numeri random
function getRandomInt(minRange, maxRange) {
    min = Math.ceil(minRange);
    max = Math.floor(maxRange);
    return Math.floor(Math.random() * (max - min) + min);
}
function getArrayRandom (minRange, maxRange, number) {
    
    //     - generare un ciclo while che pushi nell'array i 5 numeri diversi tra loro invocando la funzione dei numeri random
    while(numbersArray.length < number) {
        const genNumber = getRandomInt(minRange, maxRange)
        console.log(genNumber);
        if(!numbersArray.includes(genNumber)) {
            numbersArray.push(genNumber);
        }
    }
    console.log(numbersArray);
}

// - dichiaro un array vuoto con i numeri che inserisce l'utente
const userArray = [];
let score = 0;    
// - far partire un timer di 30 sec 
//     - invocare una timing function di 30 secondi
//     - all'interno della timing function invochiamo una funzione che genererà 5 comandi prompt
setTimeout(logicGame, 3000);

//     - il risultato di questi 5 prompt verrà salvato un un array vuoto

// - alla fine il software dirà quanti e quali numeri sono stati individuati
//     - confronteremo il contenuto dei due array che avremo ottenuto dal pc e dall'utente
//     - stampiamo in un alert i risultati
 

// - dopodiche l'utente dovrà inserire tramite prompt i numeri visti uno per volta
//     - dichiarare una funzione che genererà 5 promt
function logicGame() {
    //     - all'interno della funzione generiamo 5 prompt in un ciclo for
    for (let i = 0; i < 5; i++) {
        const userNumberRequest = prompt('quale numero ricordi?');
        const userNumber = parseInt(userNumberRequest);

        if (numbersArray.includes(userNumber) && !userArray.includes(userNumber)) {
            userArray.push(userNumber)
            score++
            const scoreContent = `hai indovinato ${score} numeri: ${userArray}`
            console.log(score, scoreContent);
            scoreDOMElement.innerHTML = scoreContent;
        } else if (score === 0) {
            scoreDOMElement.innerHTML = "non sai fare la o col bicchiere"
        }
    }
}




