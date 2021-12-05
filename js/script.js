let randomNumber = Math.floor(Math.random()*3+1);
let computerMove = getMoveName(randomNumber);
console.log('computer random nuber is: ' + randomNumber +
' - computer move is: ' + computerMove);

let playerInput = prompt("Please make your choice! 1: paper, 2: stone, 3: scissors. I am waiting...");
let playerMove = getMoveName(playerInput);
console.log('player choice: ' + playerInput +
' - player move is: ' + playerMove);

getResult(computerMove, playerMove);
