


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


// Add sound
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}


// Apply Yes or No to display box and animate
var clickSound;
mySound = new sound("ding.mp3");


function display() {
	mySound.play()

	let answer = generate();
	
	let x = document.getElementsByClassName('display');
	x[0].innerText = answer;
	x[0].classList.remove('animate');
	
	setTimeout(function () {
  	x[0].classList.add('animate');
	}, 10);

}

