let gamesPlayed = 0;
let wins = 0;
let losses = 0;
let ties = 0;

function startGame() {
  let choicesContainer = document.getElementById('choicesContainer');
  choicesContainer.style.display = 'block'; // Display choicesContainer
  choicesContainer.classList.add('slide-in'); // Add slide-in animation class
}

function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let resultMessage;

  if (userChoice === computerChoice) {
    resultMessage = "It's a tie!";
    ties++;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultMessage = 'You win!';
    wins++;
  } else {
    resultMessage = 'You lose!';
    losses++;
  }

  gamesPlayed++;
  updateCounters();
  document.getElementById(
    'result'
  ).innerText = `You chose ${userChoice}, computer chose ${computerChoice}. ${resultMessage}`;
}

function resetGame() {
  gamesPlayed = 0;
  wins = 0;
  losses = 0;
  ties = 0;
  updateCounters();
  document.getElementById('result').innerText = '';
  let choicesContainer = document.getElementById('choicesContainer');
  choicesContainer.style.display = 'none'; // Hide choicesContainer
  choicesContainer.classList.remove('slide-in'); // Remove slide-in animation class
}

function updateCounters() {
  document.getElementById('gamesPlayed').innerText = gamesPlayed;
  document.getElementById('wins').innerText = wins;
  document.getElementById('losses').innerText = losses;
  document.getElementById('ties').innerText = ties;
}

const interactiveImage = document.getElementById('interactiveImage');

interactiveImage.addEventListener('click', function () {
  alert('You clicked the interactive image!');
  // Add more interactive actions here
});
