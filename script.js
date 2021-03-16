

function generate() {
	
	let word;
	let random = Math.floor(Math.random() * Math.floor(2));
	
	if(random == 1){
		word = 'Yes'
	} else {
		word = 'No'
	}
	return word
}

let currentId = 1;

function display() {
	let answer = generate();
	
	document.getElementById('display').innerText = '';
	document.getElementById('display').innerText = answer;

	if (currentId == 1) {
		document.getElementById("display").id = "display2";
		currentId = 2;
	} else {
		document.getElementById("display").id = "display";
		currentId = 1;
	}

}

