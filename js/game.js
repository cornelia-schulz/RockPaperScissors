let score = 0;
let player = null;
let house = null;
let result = '';

// Todo
// - use classes
// - learn how to bind 'this'
// - control flow through class methods and properties 
class Game {
  constructor(player, house, result, score) {
      this.player = player;
      this.house = house;
      this.result = result;
      this.score = score;
  }

getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  console.log('computer:', choice);
  document.getElementById('game').innerHTML = '<h1>Player vs Computer</h1>';
  if (choice === 0) return 'paper';
  else if (choice === 1) return 'scissors';
  else return 'rock';
}

getWinner() {
  if (this.house === this.player) this.result = 'YOU TIE';
  else if (this.house === 'paper' && this.player === 'scissors') {
    this.result = 'YOU WIN';
    game.score += 1;
  }
  else if (this.house === 'paper' && this.player === 'rock') {
    this.result = 'YOU LOSE';
    game.score -= 1;
  }
  else if (this.house === 'rock' && this.player === 'paper') {
    this.result = 'YOU WIN';
    game.score += 1;
  }
  else if (this.house === 'rock' && this.player === 'scissors') {
    this.result = 'YOU LOSE';
    game.score -= 1;
  }
  else if (this.house === 'scissors' && this.player === 'rock') {
    this.result = 'YOU WIN';
    game.score += 1;
  }
  else if (this.house === 'scissors' && this.player === 'paper') {
    this.result = 'YOU LOSE';
    game.score -= 1;
  }
  document.getElementById('game').innerHTML = '<h1>Result</h1>';
  console.log('You picked: ', this.player, '. The House picked ', this.house, '. ', this.result, 'The score is now: ', game.score);
}

getResult(choice) {
  this.player = choice.path[0].alt;
  document.getElementById('game').innerHTML = '<h1>Player</h1>';
  this.house = setTimeout(game.getComputerChoice, 5000);
  setTimeout(game.getWinner, 10000)
}

}

let game = new Game(player, house, result, score);

document.getElementById('paper').addEventListener('click', game.getResult);
document.getElementById('scissors').addEventListener('click', game.getResult);
document.getElementById('rock').addEventListener('click', game.getResult);