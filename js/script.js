let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let argComputerMove = getMoveName(randomNumber);

function getMoveName(randomNumber){
  if(randomNumber == 1){
    return 'kamień';
  }else if(randomNumber == 2){
    return 'papier';
  }else if(randomNumber == 3){
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + randomNumber + '.');
  return 'nieznany ruch';
  
}


/*
if(randomNumber == 1){
    computerMove = 'kamień';
}

if(randomNumber == 2){
    computerMove = 'papier';
}

if(randomNumber == 3){
    computerMove = 'nożyce';
}*/

printMessage('Ruch komputera: ' + argComputerMove);



let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let argPlayerMove = getMoveName(playerInput);

function getMoveName(playerInput){
  if(playerInput == 2){
    return 'papier';
  }else if(playerInput == 1){
    return 'kamień';
  }else if(playerInput == 3){
    return 'nożyce';
  }else if(playerInput == null){
    return 'gracz stchórzył-punkt dla komputera';
  }else if(playerInput > 3){
    return 'zły ruch-punkt dla komputera';
  }else if(playerInput <=0){
    return 'zły ruch-punkt dla komputera';
  }
    
  printMessage('Nie znam ruchu o id ' + playerInput + '.');
  return 'nieznany ruch';
}



/*
if (playerInput == null){
    playerMove = 'gracz stchórzył - punkt dla komputera';
}

if (playerInput > 3){
    playerMove = 'zły ruch - punkt dla komputera';
}

if (playerInput <= 0){
    playerMove = 'zły ruch - punkt dla komputera'
}

if (playerInput == '1'){
    playerMove = 'kamień';
}

if (playerInput == '2'){
    playerMove = 'papier';
} 

if (playerInput == '3'){
    playerMove = 'nożyce';
}
*/
printMessage('Mój ruch: ' + argPlayerMove);




function displayResult(argComputerMove, argPlayerMove){

  console.log 

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }else if(argComputerMove == argPlayerMove){
    printMessage('Mamy Remis!');
  }else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove); 
}
/*
if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }

if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Komputer wygrywa !');
  }

if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis !');
  }

if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Komputer wygrywa !');
  }

if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz !');
  }

if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis !');
  }

if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz !');
  }

if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Komputer wygrywa !');
  }

if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis !');
  }*/