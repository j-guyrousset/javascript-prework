{
  let compCount = 0,
   playerCount = 0;

  const printMessage = function(msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
  }


  const printCountById = function(msg, id){
    document.getElementById(id).innerHTML='';
    const div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById(id).appendChild(div);
  }


  function clearMessages(){
    document.getElementById('messages').innerHTML='';
  }


  function resetCount (){
    clearMessages();
    compCount = 0;
    playerCount = 0;
    printCountById(compCount, 'comp-count');
    printCountById(compCount, 'player-count');
  }


  function getMoveName(num){
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
    let game = compMove + '-' + playMove,
     result = "undefined choice, try again but don't you cheat me...";
    console.log('computer - player: ' + game);

    if (compMove == playMove){
      result = "I chose " + compMove + " too, let's play again!";
      console.log("draw");
    } else if (game == 'paper-stone' || game == 'scissors-paper' || game == 'stone-scissors'){
      result = "I have " + compMove + ", you have " + playMove + ". I win, you loose.";
      compCount += 1;
      console.log('computer wins - score: ' + compCount);
      printCountById(compCount, 'comp-count');
    } else if (game == 'stone-paper' || game == 'paper-scissors' || game == 'scissors-stone'){
      result = "I have " + compMove + ", you have " + playMove + ". You win this time, let's play again!";
      playerCount += 1;
      console.log('player wins - score: ' + playerCount);
      printCountById(playerCount, 'player-count');
    }
    return printMessage(result);
  }
}
