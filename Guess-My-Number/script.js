'use strict';
// document.querySelector('.message');
// console.log(document.querySelector('.message').textContent);
//manupulate using document.querySelector
//.textcontent is important !!!!!

// document.querySelector('.message').textContent = 'Right Number!!';

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = ' Correct !';
        //change bcg to green
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent =
                guess > secretNumber ? ' Too high !' : 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lose the game';
            document.querySelector('.score').textContent = 0;
        }
    }
});

// } else if (guess > secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = ' Too high !';
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = 'You lose the game';
//         document.querySelector('.score').textContent = 0;
//     }
// } else if (guess < secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = ' Too Low !';
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = 'You lose the game';
//         document.querySelector('.score').textContent = 0;
//     }
// }

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
});