{
  function playGame(playerInput) {
    
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log("Wylosowana liczba to: " + randomNumber);
    const argComputerMove = getMoveName(randomNumber);

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/
    console.log("Gracz wpisał: " + playerInput);
    const argPlayerMove = getMoveName(playerInput);

    printMessage("Mój ruch: " + argPlayerMove);

    printMessage("Ruch komputera: " + argComputerMove);

      

    function getMoveName(playerInput) {
      if (playerInput == 2) {
        return "papier";
      } else if (playerInput == 1) {
        return "kamień";
      } else if (playerInput == 3) {
        return "nożyce";
      } else if (playerInput == null) {
        return "gracz stchórzył-punkt dla komputera";
      } else {
        return "Nie znam ruchu o id " + playerInput + ".";
      }
    }

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