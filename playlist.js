function songs (e) {
	var nowPlaying = document.querySelectorAll('.songs');
	var audio = document.querySelectorAll('audio');
}

var nowPlaying = document.querySelectorAll('.songs');
var audio = document.querySelectorAll('audio');
var allSongs = [];
var nowPlaying = allSongs[0];
var prevSongs = [];

var playState = false;
var notIntro = false;

audio.forEach(function(e) {
	allSongs.push(e);
})

console.log(allSongs);

function volume (e) {
	
}

function keyPress (e) {
	var key = event.keyCode;
	
	if (key == 32) {
		var one = document.getElementById("one");
		var two = document.getElementById("five");
		var three = document.getElementById("container");
		
		var intro = document.getElementById("intro");
		var paused = document.querySelector("text");
		
		console.log(allSongs[0]);
		
		function setAttr(element, attribute) {
			element.setAttribute("style", attribute);
		}
		
		if (one.style.animationPlayState == "running") {
			setAttr(one, "animation-play-state: paused");
			setAttr(two, "animation-play-state: paused")
			setAttr(three, "animation-play-state: paused; filter: grayscale(1)")
			setAttr(paused, "transform: scale(1)")
			allSongs[0].pause();
			
			playState = false;
			
		} else {
			setAttr(one, "animation-play-state: running");
			setAttr(two, "animation-play-state: running");
			setAttr(three, "animation-play-state: running; filter: grayscale(0)");
			setAttr(paused, "transform: scale(0)");
			setAttr(intro, "transform: translate(-50%, -50%) scale(0);")
			allSongs[0].play();
			
			playState = true;
			notIntro = true;
		}
	}
	if (key == 39 && notIntro == true) {
		if (allSongs.length != 0) {
			allSongs[0].pause();
			prevSongs.unshift(allSongs[0]);
			allSongs.shift();
			console.log(allSongs);
			if (playState == true) {
				allSongs[0].load();
				allSongs[0].play();
			}
		}
	}
	if (key == 37) {
		if (prevSongs.length != 0) {
			allSongs[0].pause();
			allSongs.unshift(prevSongs[0]);
			prevSongs.shift();
			console.log(prevSongs);
			if (playState == true) {
				allSongs[0].load();
				allSongs[0].play();
			}
		}
	}
	
	console.log(e.keyCode);
}


window.addEventListener('keydown', keyPress);