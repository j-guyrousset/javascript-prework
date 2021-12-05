function printMessage(msg){
  let div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function clearMessages(){
  document.getElementById('messages').innerHTML='';
}


function getMoveName(num){
  console.log('function getMove used');
  let move = 'unknown choice, please try again.';
  if (num == 1){
    move = 'paper';
  } else if (num == 2) {
    move = 'stone';
  } else if (num == 3) {
    move = 'scissors';
  }

  return move;
}


function getResult(compMove, playMove){
  console.log('fuction getResult used.');
  let game = compMove + '-' + playMove;
  let result = "undefined choice, try again but don't you cheat me...";
  console.log(game);

  if (compMove == playMove){
    result = "I chose " + compMove + " too, let's play again!";
    console.log("draw");
  } else if (game == 'paper-stone' || game == 'scissors-paper' || game == 'stone-scissors'){
    result = "I have " + compMove + " you have " + playMove + ". I win, you loose.";
    console.log('computer wins.');
  } else if (game == 'stone-paper' || game == 'paper-scissors' || game == 'scissors-stone') {
    result = "I have " + compMove + " you have " + playMove + ". You win this time, let's play again!";
    console.log('player wins.');
  }
  return printMessage(result);
}
