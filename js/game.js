
function Game() {
  this.score = 0;
  this.target = document.getElementById('game');
  this.correctColor = 'red';
}

Game.prototype.startGame = function() {
  // start a timer for game
  setTimeout( () => {
    this.endGame();
  }, 6000);
  
  // start a timer for rendering of balloons
  this.renderBalloonsInterval = setInterval( () => {
    this.renderBalloons();
  }, 2000);
  
  // render the balloons
  this.renderBalloons();
  
}

Game.prototype.renderBalloons = function() {

  let index = Math.floor(Math.random() * balloonArray.length);
  let randomBalloon = balloonArray[index];
  
  // creates balloon element on screen
  let balloonElement = document.createElement('img');
  balloonElement.src = randomBalloon.imgSrc;
  this.target.appendChild(balloonElement);
  
  // adds event listener to balloon that increases or decreases score when clicked 
  balloonElement.addEventListener('click', () => {
    this.balloonClicked(randomBalloon.color, balloonElement);
  })
  
}

Game.prototype.balloonClicked = function(color, balloonElement) {

  // remove balloon from DOM when clicked
  balloonElement.remove();

  // increase or decrease score based on color of balloon
  if (color === this.correctColor) {
    this.score++;
  } else {
    this.score--;
  }
}

Game.prototype.endGame = function() {
  
  // stop rendering balloons
  clearInterval(this.renderBalloonsInterval);
  
  // remove all balloons from DOM
  this.target.innerHTML = '';
  
  // show the user their score
  console.log(this.score);
  
}


function Balloon(color, imgSrc) {
  this.color = color;
  this.imgSrc = imgSrc;
}


// create new Balloons and add to balloonArray
// TODO: add event listener to Balloon
let balloonArray = [
  new Balloon('blue', 'assets/balloon-colors/blue-balloon.png'),
  new Balloon('green', 'assets/balloon-colors/green-balloon.png'),
  new Balloon('light-blue', 'assets/balloon-colors/light-blue-balloon.png'),
  new Balloon('orange', 'assets/balloon-colors/orange-balloon.png'),
  new Balloon('pink', 'assets/balloon-colors/pink-balloon.png'),
  new Balloon('purple', 'assets/balloon-colors/purple-balloon.png'),
  new Balloon('red', 'assets/balloon-colors/red-balloon.png'),
  new Balloon('yellow', 'assets/balloon-colors/yellow-balloon.png')
];



const gameInstance = new Game();
gameInstance.startGame();