
// changes the players section
var playerchoice;
//
// document.getElementById("Rock").addEventListener("click", function() {
//     playerChoice = "rock";
//     // console.log(playerSelection);
//     document.getElementById("demo").innerHTML = "You have chosen Rock";
// });
// document.getElementById("Paper").addEventListener("click", function() {
//   playerChoice = "paper";
//    // console.log(playerSelection);
//   document.getElementById("demo").innerHTML = "You have chosen paper";
// });
// document.getElementById("Scissors").addEventListener("click", function() {
//   playerChoice = "scissors";
//    // console.log(playerSelection);
//   document.getElementById("demo").innerHTML = "You have chosen scissors";
// });


const computer = {
  _choice: '',

  set choice(num) {
    switch(num) {
      case 0:
      case 1:
      case 2:
        this._choice =  "rock";
        break;
      case 3:
      case 4:
      case 5:
       this._choice = "paper";
       break;
      case 6:
      case 7:
      case 8:
      this._choice = "scissors";
      break;
    }
  }

}
//  TESTING OF THE COMPUTER CHOICE FUNCTION
// console.log(computer.choice = Math.floor(Math.random() * 9));
// console.log(computer._choice);




const game = {
  playerScore: 0,
  computerScore: 0,

  round(ps, cs) {
    console.log(ps, cs);
    if (ps == "rock" && cs == "rock") {
   console.log("Draw");
   document.getElementById('ps').innerHTML = `You chose ${ps}!`;
   document.getElementById('cs').innerHTML = `The computer chose ${cs}!`;
   document.getElementById('roundResult').innerHTML = 'Draw';
 } else if (ps == "rock" && cs == "paper") {
   console.log("Computer wins");
   document.getElementById('ps').innerHTML = `You chose ${ps}!`;
   document.getElementById('cs').innerHTML = `The computer chose ${cs}!`;
   document.getElementById('roundResult').innerHTML = 'You lose!';
   this.computerScore++;
   document.getElementById('playerScore').innerHTML = this.playerScore;
   document.getElementById('computerScore').innerHTML = this.computerScore;
   console.log(this.playerScore);
   console.log(this.computerScore);
 } else if (ps == "rock" && cs == "scissors") {
   console.log("Player wins");
   document.getElementById('ps').innerHTML = `You chose ${ps}!`;
   document.getElementById('cs').innerHTML = `The computer chose ${cs}!`;
   document.getElementById('roundResult').innerHTML = 'You Win!';
   this.playerScore++;
   document.getElementById('playerScore').innerHTML = this.playerScore;
   document.getElementById('computerScore').innerHTML = this.computerScore;
   console.log(this.playerScore);
   console.log(this.computerScore);
 } else if (ps == "paper" && cs == "rock") {
   console.log("Player wins");
   document.getElementById('ps').innerHTML = `You chose ${ps}!`;
   document.getElementById('cs').innerHTML = `The computer chose ${cs}!`;
   document.getElementById('roundResult').innerHTML = 'You Win!';
   this.playerScore++;
   document.getElementById('playerScore').innerHTML = this.playerScore;
   document.getElementById('computerScore').innerHTML = this.computerScore;
   console.log(this.playerScore);
   console.log(this.computerScore);
 } else if (ps == "paper" && cs == "paper") {
   console.log("draw");
   document.getElementById('ps').innerHTML = `You chose ${ps}!`;
   document.getElementById('cs').innerHTML = `The computer chose ${cs}!`;
   document.getElementById('roundResult').innerHTML = 'Draw!';
 } else if (ps == "paper" && cs == "scissors") {
   console.log("Compouter wins");
   document.getElementById('ps').innerHTML = `You chose ${ps}!`;
   document.getElementById('cs').innerHTML = `The computer chose ${cs}!`;
   document.getElementById('roundResult').innerHTML = 'You lose!';
   this.computerScore++;
   document.getElementById('playerScore').innerHTML = this.playerScore;
   document.getElementById('computerScore').innerHTML = this.computerScore;
   console.log(this.playerScore);
   console.log(this.computerScore);
 } else if (ps == "scissors" && cs == "rock") {
   console.log("Computer wins");
   document.getElementById('ps').innerHTML = `You chose ${ps}!`;
   document.getElementById('cs').innerHTML = `The computer chose ${cs}!`;
   document.getElementById('roundResult').innerHTML = 'You lose!';
   this.computerScore++;
   document.getElementById('playerScore').innerHTML = this.playerScore;
   document.getElementById('computerScore').innerHTML = this.computerScore;
   console.log(this.playerScore);
   console.log(this.computerScore);
 } else if (ps == "scissors" && cs == "paper") {
   console.log("Player wins");
   document.getElementById('ps').innerHTML = `You chose ${ps}!`;
   document.getElementById('cs').innerHTML = `The computer chose ${cs}!`;
   document.getElementById('roundResult').innerHTML = 'You Win!';
   this.playerScore++;
   document.getElementById('playerScore').innerHTML = this.playerScore;
   document.getElementById('computerScore').innerHTML = this.computerScore;
   console.log(this.playerScore);
   console.log(this.computerScore);
 } else if (ps == "scissors" && cs == "scissors") {
   console.log("draw");
   document.getElementById('ps').innerHTML = `You chose ${ps}!`;
   document.getElementById('cs').innerHTML = `The computer chose ${cs}!`;
   document.getElementById('roundResult').innerHTML = 'Draw!';
   }
  }
};

document.getElementById("Rock").addEventListener("click", function() {
    playerChoice = "rock";
    computer.choice = Math.floor(Math.random() * 9);
    computerSelection = computer._choice;
    game.round(playerChoice, computerSelection);
});
document.getElementById("Paper").addEventListener("click", function() {
    playerChoice = "paper";
    computer.choice = Math.floor(Math.random() * 9);
    computerSelection = computer._choice;
    game.round(playerChoice, computerSelection);
});
document.getElementById("Scissors").addEventListener("click", function() {
    playerChoice = "scissors";
    computer.choice = Math.floor(Math.random() * 9);
    computerSelection = computer._choice;
    game.round(playerChoice, computerSelection);
});
document.getElementById("reset").addEventListener("click", function() {
  game.computerScore = 0;
  game.playerScore = 0;
  document.getElementById('playerScore').innerHTML = game.playerScore;
  document.getElementById('computerScore').innerHTML = game.computerScore;
  document.getElementById('ps').innerHTML = `Your choice:`;
  document.getElementById('cs').innerHTML = `Computers Choice:`;
  document.getElementById('roundResult').innerHTML = 'Game Reset!';

});
