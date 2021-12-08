{
  function playGame(playerInput){
    clearMessages();

    let randomNumber = Math.floor(Math.random()*3+1);
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);

    getResult(computerMove, playerMove);
  }

  document.getElementById('paper-button').addEventListener('click', function(){playGame(1)});
  document.getElementById('stone-button').addEventListener('click', function(){playGame(2)});
  document.getElementById('scissors-button').addEventListener('click', function(){playGame(3)});

  document.getElementById('reset-button').addEventListener('click', function(){resetCount()});
}
