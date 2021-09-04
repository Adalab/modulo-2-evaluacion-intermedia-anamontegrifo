'use strict'

//document.queryselector abbreviation
function getEl(selector) {
    return document.querySelector(selector);
}

//inner.HTML abbreviation
function trackEl(string) {
    return clueText.innerHTML = (string);
}

//Variables containing the HTML elements used
const selectedNumber = getEl('.js-selectedNumber');
const tryItBtn = getEl('.js-try');
const clueText = getEl('.js-clueText');
const triesText = getEl('.js-triesText');


//Variable containing the generated random number
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
let randomNumber = getRandomNumber(100);
console.log(randomNumber);


//Function - guess the number
function guessTheNumber() {

    let selectedNumberValue = parseInt(selectedNumber.value);
    if (selectedNumberValue === randomNumber) {
        trackEl('¡Has ganado, campeona!')
    }
    else if (selectedNumberValue < 0 || selectedNumberValue > 100) {
        trackEl('El número debe estar entre 1 y 100');
    }
    else if (selectedNumberValue < randomNumber) {
        trackEl('Demasiado bajo.');
    }
    else if (selectedNumberValue > randomNumber) {
        trackEl('Demasiado alto.');
    }
    else {
        trackEl('El valor introducido debe ser un número entre 1 y 100');
    }
}

//Function - counter
let number = 0;
function counter() {
    number = number + 1;
    triesText.innerHTML = `Número de intentos: ${number}`;
}

//Handler function
function handleTryIt() {
    guessTheNumber();
    counter()
        ;
}

//Listener
tryItBtn.addEventListener('click', handleTryIt);
