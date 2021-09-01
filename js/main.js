'use strict'
//Variables containing the HTML elements used
const selectedNumber = document.querySelector('.js-selectedNumber');
const tryItBtn = document.querySelector('.js-try');
const clueText = document.querySelector('.js-clueText');
const triesText = document.querySelector('.js-triesText');


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
        clueText.innerHTML = '¡Has ganado, campeona!'
    }
    else if (selectedNumberValue < 0 || selectedNumberValue > 100) {
        clueText.innerHTML = 'El número debe estar entre 1 y 100';
    }
    else if (selectedNumberValue < randomNumber && selectedNumberValue <= 100) {
        clueText.innerHTML = 'Demasiado bajo.'
    }
    else if (selectedNumberValue > randomNumber && selectedNumberValue <= 100) {
        clueText.innerHTML = 'Demasiado alto.'
    }
    else {
        clueText.innerHTML = 'El valor introducido debe ser un número entre 0 y 100'
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
