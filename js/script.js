{
  function playGame(playerInput) {
    
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log("Wylosowana liczba to: " + randomNumber);
    const argComputerMove = getMoveName(randomNumber);

    printMessage("Ruch komputera: " + argComputerMove);
    

    console.log("Gracz wpisał: " + playerInput);
    

    function getMoveName(playerInput) {
      if (playerInput == 2) {
        return "papier";
      } else if (playerInput == 1) {
        return "kamień";
      } else if (playerInput == 3) {
        return "nożyce"; 
      } else {
        return "Nie znam ruchu o id " + playerInput + ".";
      }
    }
    const argPlayerMove = getMoveName(playerInput);  
    printMessage("Mój ruch: " + argPlayerMove);

    function displayResult(argComputerMove, argPlayerMove) {
      if (argComputerMove == "kamień" && argPlayerMove == "papier") {
        printMessage("Ty wygrywasz!");
        playerWins++;
      } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
        printMessage("Ty wygrywasz!");
        playerWins++;
      } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
        printMessage("Ty wygrywasz!");
        playerWins++;
      } else if (argComputerMove == argPlayerMove) {
        printMessage("Mamy Remis!");
      } else {
        printMessage("Przegrywasz :(");
        computerWins++;
      }
      printMessage("Zagrałem " + argPlayerMove + ", a Ty " + argComputerMove);

      updateResult(playerWins, computerWins);
    }  
    displayResult(argComputerMove, argPlayerMove);
  }

  let playerWins = 0, computerWins = 0;
  updateResult(playerWins, computerWins);

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
}