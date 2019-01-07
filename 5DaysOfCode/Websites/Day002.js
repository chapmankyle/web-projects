/*
  [15 March 2018]
  Day 2: Making a random number guessing game
*/

// generates a random number
function generateRandNum() {
  var guesses = document.getElementById("output");
  var clicked = false;

  document.getElementById('newGame').onclick = function() {
    clicked = !clicked;
  };
  document.getElementById('guess').addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) document.getElementById('check').click();
  });

  if (clicked) {
    if (!confirm('Restart game with new number?')) return;
  }

  guesses.value = '';
  randNum = Math.floor(Math.random()*500);
  guesses.value = "New number generated.\n"

  // hide number that has been generated
  document.getElementById('numToGuess').value = '';
  document.getElementById('showCheat').style.display = 'none';
}

// checks the guess against the random number
function checkGuess() {
  var guess = document.getElementById('guess').value;

  if (!isNaN(guess)) {
    var guesses = document.getElementById('output');

    if (guess === randNum)      guesses.value = guesses.value + "\r" + "You have guessed correctly! (" + guess + ")";
    else if (guess > randNum)  guesses.value = guesses.value + "\r" + "You have guessed too high! (" + guess + ")";
    else                       guesses.value = guesses.value + "\r" + "You have guessed too low! (" + guess + ")";
  }
  else alert("Not an integer, try again.");
}

// shows the guesses by the user
function showGuesses() {
  var guesses = document.getElementById('guesses');
  var btn = document.getElementById('showGuesses');

  if (guesses.style.display != 'block') {
    guesses.style.display = 'block';
    btn.value = "Hide My Guesses";
  }
  else {
    guesses.style.display = 'none';
    btn.value = "Show My Guesses";
  }
}

// shows the random number that has been generated
function showNum() {
  if (document.getElementById('cheat').checked) {
    document.getElementById('numToGuess').value = randNum;
    document.getElementById('showCheat').style.display = 'inline';
  }
  else {
    document.getElementById('numToGuess').value = '';
    document.getElementById('showCheat').style.display = 'none';
  }
}

// auto sizes the text area
function autoSize(a)
{
   a.style.height = 'auto';
   var newHeight = (a.scrollHeight > 32 ? a.scrollHeight : 32);
   a.style.height = newHeight.toString() + 'px';
}

// generates random number once user enters page
window.onload = function() {
  generateRandNum();
}
