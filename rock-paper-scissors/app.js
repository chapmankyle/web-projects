// variables for user and comp score
let userScore = 0;
let compScore = 0;

// span tags
const spanUserScore = document.getElementById('user-score');
const spanCompScore = document.getElementById('comp-score');

// div tags
const divScoreBoard = document.querySelector('.score-board');
const divResult = document.querySelector('.result > p');
const divShowWon = document.getElementById('usr-won');
const divShowLost = document.getElementById('usr-lost');
const divRock = document.getElementById('Rock');
const divPaper = document.getElementById('Paper');
const divScissors = document.getElementById('Scissors');

// gets choice for computer
function getCompChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randNum = Math.floor(Math.random() * 3);

  return choices[randNum];
}

// when user won
function win(usr, comp) {
  let lst = document.getElementById(usr).classList;
  userScore += 1;
  spanUserScore.innerHTML = userScore;
  divResult.innerHTML = `${usr} beats ${comp}. You win!`;
  divShowWon.style.display = "inline";
  divShowLost.style.display = "none";
  lst.add('green-glow');
  setTimeout(function() { lst.remove('green-glow') }, 400);
}

// when user lost (computer won)
function lose(usr, comp) {
  let lst = document.getElementById(usr).classList;
  compScore += 1;
  spanCompScore.innerHTML = compScore;
  divResult.innerHTML = `${usr} loses to ${comp}. You lose ...`;
  divShowWon.style.display = "none";
  divShowLost.style.display = "inline";
  lst.add('red-glow');
  setTimeout(function() { lst.remove('red-glow') }, 400);
}

// when there is a draw
function draw(usr) {
  let lst = document.getElementById(usr).classList;
  divResult.innerHTML = "Nobody wins. It's a draw!";
  divShowWon.style.display = "none";
  divShowLost.style.display = "none";
  lst.add('grey-glow');
  setTimeout(function() { lst.remove('grey-glow') }, 400);
}

// play game with user choice
function game(userChoice) {
  const compChoice = getCompChoice();

  switch (userChoice + compChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(userChoice, compChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      lose(userChoice, compChoice);
      break;
    default:
      draw(userChoice);
      break;
  }
}

// main function
function main() {
  // adding events to the pictures
  divRock.addEventListener('click', () => game("Rock"));
  divPaper.addEventListener('click', () => game("Paper"));
  divScissors.addEventListener('click', () => game("Scissors"));
}

// start main function
main();
