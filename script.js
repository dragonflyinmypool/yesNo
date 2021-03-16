

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

function display() {
	let answer = generate();
	document.getElementById('display').innerText = answer

}

