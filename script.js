

// Generate Yes or No
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


// Load sound
var sound2 = new Howl({
    src: ['ding.mp3']
  });


// Animate, create actions
function display() {
	// mySound.play();
	sound2.play();
	let answer = generate();

	let x = document.getElementsByClassName('display');
	x[0].innerText = answer;
	x[0].classList.remove('animate');
	
	setTimeout(function () {
  	x[0].classList.add('animate');
	}, 100);

}