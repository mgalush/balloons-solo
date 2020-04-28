function Game(correctColor) {
  this.score = 0;
  this.target = document.getElementById('game');
  this.correctColor = correctColor;
  this.timer = 10;
}

Game.prototype.startGame = function () {
  // start a timer for rendering of balloons
  this.interval = setInterval(() => {
    this.renderBalloons();
    this.timer--;
    this.renderHeaderText();
    if (this.timer <= 0) {
      this.endGame();
    }
  }, 1000);

  // render header text
  this.renderHeaderText();
};

Game.prototype.renderBalloons = function () {
  for (var i = 0; i < 10; i++) {
    const randomBalloon = getRandomBalloon();

    // creates balloon element on screen
    let balloonElement = document.createElement('img');
    balloonElement.src = randomBalloon.imgSrc;
    this.target.appendChild(balloonElement);

    // places balloon element at random location on screen
    let randomCoordinates = getRandomCoordinates();
    balloonElement.style.top = randomCoordinates.x + 'px';
    balloonElement.style.left = randomCoordinates.y + 'px';

    // adds event listener to balloon that increases or decreases score when clicked
    balloonElement.addEventListener('click', () => {
      this.balloonClicked(randomBalloon.color, balloonElement);
    });
  }
};

Game.prototype.balloonClicked = function (color, balloonElement) {
  // remove balloon from DOM when clicked
  balloonElement.remove();

  // increase or decrease score based on color of balloon
  if (color === this.correctColor) {
    this.score++;
  } else {
    this.score--;
  }
};

Game.prototype.endGame = function () {
  // stop rendering balloons
  clearInterval(this.interval);

  // remove all balloons from DOM
  this.target.innerHTML = '';

  // remove header from DOM
  document.getElementById('header').innerHTML = '';

  // show the user their score
  this.target.innerText = 'Final Score: ' + this.score;

  // TODO: play again button
  displayPlayAgainButton();
};

function Balloon(color, imgSrc) {
  this.color = color;
  this.imgSrc = imgSrc;
}

// create new Balloons and add to balloonArray
let balloonArray = [
  new Balloon('blue', 'assets/balloon-colors/blue-balloon.png'),
  new Balloon('green', 'assets/balloon-colors/green-balloon.png'),
  new Balloon('light-blue', 'assets/balloon-colors/light-blue-balloon.png'),
  new Balloon('orange', 'assets/balloon-colors/orange-balloon.png'),
  new Balloon('pink', 'assets/balloon-colors/pink-balloon.png'),
  new Balloon('purple', 'assets/balloon-colors/purple-balloon.png'),
  new Balloon('red', 'assets/balloon-colors/red-balloon.png'),
  new Balloon('yellow', 'assets/balloon-colors/yellow-balloon.png'),
];

function getRandomBalloon() {
  let index = Math.floor(Math.random() * balloonArray.length);
  return balloonArray[index];
}

function getRandomCoordinates() {
  let randomHeight = Math.floor(
    Math.random() * (window.innerHeight - 100) + 50
  ); // +50 to account for height of header with score and timer
  let randomWidth = Math.floor(Math.random() * (window.innerWidth - 100));
  return {
    x: randomHeight,
    y: randomWidth,
  };
}

function displayPlayAgainButton() {
  let button = document.createElement('button');
  button.id = 'play-again';
  button.innerHTML = 'Play again';
  button.onclick = function () {
    location.href = '/game.html';
  };
  gameInstance.target.appendChild(button);
};

Game.prototype.renderHeaderText = function () {
  // render score on screen
  document.getElementById('score').textContent = 'Score: ' + this.score;

  // let user know which color balloon to click
  document.getElementById('color-display').textContent =
    'Click the ' + this.correctColor + ' balloons';

  // render timer on screen
  document.getElementById('timer').textContent =
    '00:' + this.timer.toString().padStart(2, '0');
};

const gameInstance = new Game(getRandomBalloon().color);

Game.prototype.loadGame = function () {
  this.target.id = 'instructions';
  this.target.innerText = 'Click anywhere to begin';

  // clear screen and start game
  window.addEventListener('click', renderStartText);

  let target = this.target;
  function renderStartText() {
    target.innerText = '';
    gameInstance.startGame();
    window.removeEventListener('click', renderStartText);
  }
};

gameInstance.loadGame();
