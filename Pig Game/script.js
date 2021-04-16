'use strict';
// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

let scores, currentScore, activePlayer, playing;

const init = function() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;

    diceEl.classList.add('hidden');
    diceEl.classList.remove('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    //toggle method is insterest you need to know !!!
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// start conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');
init();

// rolling the dice

btnRoll.addEventListener('click', function() {
    if (playing) {
        //Generate a randon dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // display the dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // check the number
        if (dice !== 1) {
            // add to current score
            currentScore += dice;
            document.getElementById(
                `current--${activePlayer}`
            ).textContent = currentScore;

            // currentScore0El.textContent = currentScore0;
        } else {
            //switch player
            switchPlayer();
        }
    }
});
btnHold.addEventListener('click', function() {
    if (playing) {
        // add current to the active players score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        // check if player is >=100
        if (scores[activePlayer] >= 50) {
            playing = false;
            diceEl.classList.add('hidden');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        } else {
            // switch next players
            switchPlayer();
        }
    }
});
btnNew.addEventListener('click', init);