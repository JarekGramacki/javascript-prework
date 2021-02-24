function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	let divMsg = document.getElementById('messages');
	divMsg.appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

