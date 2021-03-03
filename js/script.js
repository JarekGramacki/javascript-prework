{
  function playGame(playerInput) {
    
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log("Wylosowana liczba to: " + randomNumber);

    function getMoveName(playerInput) {
      if (playerInput == 2) {
        return "papier";
      } else if (playerInput == 1) {
        return "kamień";
      } else if (playerInput == 3) {
        return "nożyce"; 
      } 
    }

    const ComputerMove = getMoveName(randomNumber); 
    const PlayerMove = getMoveName(playerInput);  

    printMessage("Mój ruch: " + PlayerMove);
    printMessage("Ruch komputera: " + ComputerMove);

    function displayResult(ComputerMove, PlayerMove) {
      if (ComputerMove == "kamień" && PlayerMove == "papier") {
        printMessage("Ty wygrywasz!");
        playerWins++;
      } else if (ComputerMove == "papier" && PlayerMove == "nożyce") {
        printMessage("Ty wygrywasz!");
        playerWins++;
      } else if (ComputerMove == "nożyce" && PlayerMove == "kamień") {
        printMessage("Ty wygrywasz!");
        playerWins++;
      } else if (ComputerMove == PlayerMove) {
        printMessage("Mamy Remis!");
      } else {
        printMessage("Przegrywasz :(");
        computerWins++;
      }
      printMessage("Zagrałem " + PlayerMove + ", a Ty " + ComputerMove);

      updateResult(playerWins, computerWins);
    }  
    displayResult(ComputerMove, PlayerMove);
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