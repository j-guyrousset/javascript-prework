let randomNumber = Math.floor(Math.random()*3+1);
let computerMove = '';

if (randomNumber == 1){
  computerMove = 'paper';
} else if (randomNumber == 2) {
  computerMove = 'stone';
} else if (randomNumber == 3) {
  computerMove = 'scisors';
}
console.log('computer random nuber is: ' + randomNumber +
' - computer move is: ' + computerMove);

let playerInput = prompt("Please make your choice! 1: stone, 2: paper, 3: scisors. I am waiting...");
let playerMove = 'unknown choice, try again!';
console.log();

if (playerInput == 1){
  playerMove = 'stone';
} else if (playerInput == 2) {
  playerMove = 'paper';
} else if (playerInput == 3) {
  playerMove = 'scisors';
} else {
  printMessage(playerMove);
}
console.log('player choice: ' + playerInput +
' - player move is: ' + playerMove);

if (computerMove == playerMove){
  printMessage('I chose '+ computerMove + ' too. Ex aequo this time!');
  printMessage('You are a tough player... try again!');
}

if (computerMove == 'paper'){
  if (playerMove == 'stone'){
    printMessage('paper wraps stone - I win you loose!');
  } else if (playerMove == 'scisors') {
    printMessage("scisors cut paper - you win, this time. Let's play again!");
  } else {
    printMessage("And don't try to cheat me this time!");
  }

} else if (computerMove == 'stone') {
  if (playerMove == 'paper'){
    printMessage("paper wraps stone - you win, this time. Let's play again!");
  } else if (playerMove == 'scisors') {
    printMessage('Stone breaks scisors - I win, you loose!');
  } else {
    printMessage("And don't try to cheat me this time!");
  }
  
} else if (computerMove == 'scisors') {
  if (playerMove == 'paper'){
    printMessage("scisors cut paper - I win you loose!");
  } else if (playerMove == 'stone') {
    printMessage("Stone breaks scisors - you win, this time. Let's play again!");
  } else {
    printMessage("And don't try to cheat me this time!");
  }
}
