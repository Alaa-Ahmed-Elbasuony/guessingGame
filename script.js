'use strict';
const rand =function (){
  return Math.trunc(Math.random() * 20) + 1;
}
const scoreText =function (newScore){
  return document.querySelector('.score').textContent=newScore;
}
const setWidth =function (newWidth){
  return document.querySelector('.number').style.width=newWidth;
}
const bodyColor=function (newColor){
  return document.querySelector('body').style.backgroundColor=newColor;
}
const changNumber =function (num){
  return document.querySelector('.number').textContent=num;
}
const displayMessage =function (message) {
  return document.querySelector('.message').textContent=message;
}
const highscoreFunc =function(highscore){
  document.querySelector('.highscore').textContent=highscore;
}
let secretNm = rand();
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (guess>20 || guess<=0) {
    displayMessage('Not a valid number ⛔');
  } else if (guess === secretNm) {
    displayMessage('🎉🔥 You Won!');
    changNumber(secretNm);
    highscore = Math.max(score, highscore);
    highscoreFunc(highscore);
    bodyColor('#60b347');
    setWidth('30rem');
  } else if (guess !== secretNm) {
    if (score > 1) {
      displayMessage(guess < secretNm ? 'Increase 📈 your guess..' : 'Lower 📉 your guess..');
      score--;
      scoreText(score);
    }
    else {
      displayMessage('You lost 💔');
      scoreText() = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNm = rand();
  scoreText(score);
  document.querySelector('.guess').value = '';
  bodyColor('#222');
  setWidth('15rem');
  displayMessage('Start guessing...');
  changNumber('?');
});
document.querySelector('.reset-highscore').addEventListener('click', function () {
  highscore=0;
  highscoreFunc(highscore);
});