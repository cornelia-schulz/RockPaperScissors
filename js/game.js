let score = 0;
let player = null;
let house = null;
let result = "";

// Todo
// - use classes
// - learn how to bind 'this'
// - control flow through class methods and properties 
class Game {
  constructor(player, house) {
      this.player = player;
      this.house = house;
  }


showPlayerChoice(choice) {
  return function(){
    console.log('you have clicked: ', choice)
    this.player = choice;
  }
}

getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  console.log('computer:', choice);
  if (choice === 0) return "paper";
  else if (choice === 1) return "scissors";
  else return "rock";
}

getWinner() {
  this.house = getComputerChoice();

}

}

let game = new Game(player, house);

document.getElementById("paper").addEventListener("click", game.showPlayerChoice("paper"));
document.getElementById("scissors").addEventListener("click", game.showPlayerChoice("scissors"));
document.getElementById("rock").addEventListener("click", game.showPlayerChoice("rock"));