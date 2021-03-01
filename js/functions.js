function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	let divMsg = document.getElementById('messages');
	divMsg.appendChild(div);
}

function updateResult(p, c){
	let divResult = document.getElementById('result');
	divResult.innerHTML = 'Player: ' + p + ' - Computer: ' + c;
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}