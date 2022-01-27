'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🏆 Correct Number';

// document.querySelector('.number').textContent = 14;
// document.querySelector('.score').textContent = 15;
// document.querySelector('.guess').value = 12;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');
  }

  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess < secretNumber ? '😭👠 Too Low!' : '😭 Too High!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You lose the Game');

      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
    }
  }

  // //When guess is too low

  // else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = '😭👠 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You lose the Game';
  //     document.querySelector('body').style.backgroundColor = 'red';
  //     document.querySelector('.number').style.width = '30rem';
  //     document.querySelector('.number').textContent = secretNumber;
  //   }

  //   //When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = '😭 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You lose the Game';
  //     document.querySelector('body').style.backgroundColor = 'red';
  //     document.querySelector('.number').style.width = '30rem';
  //     document.querySelector('.number').textContent = secretNumber;
  //   }

  //when player wins
  else {
    displayMessage('🥳 Congratulation');
    // document.querySelector('.message').textContent = '🥳 Congratulation';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
