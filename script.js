
// changes the players section
document.getElementById("Rock").addEventListener("click", setRock);
const playerSelection = document.getElementById("Rock").id;
function setRock() {
  document.getElementById("demo").innerHTML = "You have chosen Rock";
  var playerSelection = "Rock";
}
document.getElementById("Paper").addEventListener("click", function() {
  //  var playerSelection = "Paper";
  document.getElementById("demo").innerHTML = "You have chosen paper";
});
document.getElementById("Scissors").addEventListener("click", function() {
  //  var playerSelection = "Scissors";
  document.getElementById("demo").innerHTML = "You have chosen scissors";
});


const computer = {
  _score: 0,
  _choice: '',

  set choice(random) {
    let num = Math.floor(Math.random() * 10);
    let random;
    switch(num) {
      case 1:
      case 2:
      case 3:
        return "rock";
        break;
      case 4:
      case 5:
      case 6:
       return "paper";
       break;
      case 7:
      case 8:
      case 9:
      return "scissors";
      break;
    }

  }
}


console.log(computer._choice);
