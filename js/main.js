'use strict'
//Variables containing the HTML elements used
const selectedNumber = document.querySelector('js-selectedNumber');
const tryItBtn = document.querySelector('.js-try');
const clueText = document.querySelector('.js-clueText');
const triesText = document.querySelector('js-triesText');

//Variable containing the generated random number
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
let randomNumber = getRandomNumber(100);
console.log(randomNumber);



//Handler function






//Listener
// tryItBtn.addEventListener('click', handleTryIt);
