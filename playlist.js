var songs = document.querySelectorAll('#playing-next p');

function keyPress (e) {
	var key = event.keyCode;
	
	if (key == 32) {
		var one = document.getElementById("one");
		var two = document.getElementById("five");
		var three = document.getElementById("container");
		
		var intro = document.getElementById("intro");
		var paused = document.querySelector("text");
		
		if (one.style.animationPlayState == "running") {
			one.setAttribute("style", "animation-play-state: paused");
			two.setAttribute("style", "animation-play-state: paused");
			three.setAttribute("style", "animation-play-state: paused; filter: grayscale(1)");
			paused.setAttribute("style", "transform: scale(1)");
			
		} else {
			one.setAttribute("style", "animation-play-state: running");
			two.setAttribute("style", "animation-play-state: running");
			three.setAttribute("style", "animation-play-state: running; filter: grayscale(0)");
			paused.setAttribute("style", "transform: scale(0)");
			intro.setAttribute("style", "transform: translate(-50%, -50%) scale(0);")
		}
	}
	
	console.log(e.keyCode);
}


window.addEventListener('keydown', keyPress);