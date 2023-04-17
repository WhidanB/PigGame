'use strict';

// selections
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('btn--new');
const btnRoll = document.querySelector('btn--roll');
const btnHold = document.querySelector('btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//dice roll function
const diceRoll = function () {
  let diceface = Math.trunc(Math.random() * 6 + 1);
  let score = 0 + diceface;
  console.log(diceEl);
  console.log(diceface);
  if (diceface === 1) {
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceface}.png`;
    score0El = 0;
  } else {
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceface}.png`;

    console.log(score + diceface);
  }
};

document.querySelector('.btn--roll').addEventListener('click', diceRoll);
