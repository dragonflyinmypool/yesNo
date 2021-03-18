

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

let toggle = 1;

function display() {
	let answer = generate();

	if (toggle) {

		let x = document.getElementsByClassName("display1");
		x[0].innerText = answer;
		x[0].classList.add("display2");
		x[0].classList.remove("display1");
		
		toggle = 0;

	} else {

		let x = document.getElementsByClassName("display2");
		x[0].innerText = answer;
		x[0].classList.add("display1");
		x[0].classList.remove("display2");
		

		toggle = 1;

	}
}

