function User() {
  this.name = name;
}

function Balloon(color, imgSrc) {
  this.color = color;
  this.imgSrc = imgSrc;
}

function Game() {
  this.currentScore = currentScore;
  this.highScore = highScore;
  this.allScores = [];
  this.correctColor = correctColor;
  this.incorrectColor = incorrectColor;
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

