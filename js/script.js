let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = 'nieznany ruch';

if(randomNumber == 1){
    computerMove = 'kamień';
}

if(randomNumber == 2){
    computerMove = 'papier';
}

if(randomNumber == 3){
    computerMove = 'nożyce';
}

printMessage('Ruch komputera: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = 'zly ruch';

if (playerInput == null)
{
    playerMove = 'gracz stchorzyl (anuluj)';
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

printMessage('Mój ruch: ' + playerMove);

