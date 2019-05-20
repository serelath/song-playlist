// SONG NAMES
var allSongNames = document.querySelectorAll('p.songs');
var songNames = [];
var prevSongNames = [];

allSongNames.forEach(function(e) {
	songNames.push(e);
})

// AUDIO
var audio = document.querySelectorAll('audio');

var allSongs = [];
var nowPlaying = allSongs[0];
var prevSongs = [];

var playState = false;
var notIntro = false;

audio.forEach(function(e) {
	allSongs.push(e);
})

// VOLUME
function volume (e) {
	
}


//KEYPRESS
function keyPress (e) {
	var key = event.keyCode;
	
	if (key == 32) {
		var one = document.getElementById("one");
		var two = document.getElementById("five");
		var three = document.getElementById("container");
		
		var intro = document.getElementById("intro");
		var paused = document.querySelector("text");
        
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
		var nowPlayingName = document.querySelector(".now-playing p");
        var playingNext = document.querySelector("#playing-next");
        var nowPlaying = "";
        var playPrevSongs = document.querySelector("#previous");
        
        
		if (allSongs.length > 1) {
			allSongs[0].pause();
            prevSongNames.push(songNames[0]);
			prevSongs.unshift(allSongs[0]);
			allSongs.shift();
            
            nowPlaying = songNames[1].innerHTML;
            songNames.shift();
            nowPlayingName.innerHTML = nowPlaying;
            
            
            playingNext.innerHTML = "";
        
            for (var i = 1 ; i < songNames.length; i++) {
                    playingNext.innerHTML += '<p class="songs">' + songNames[i].innerHTML + '</p>';   
                };
            
            

            playPrevSongs.innerHTML = "";
            
            playPrevSongs.innerHTML = '<p class="songs">[Le Gang] Drops In Mind</p>';
            
            for (var i = 1 ; i < prevSongNames.length; i++) {
                playPrevSongs.innerHTML = '<p class="songs">' + prevSongNames[i].innerHTML + '</p>' + playPrevSongs.innerHTML;   
            };
            console.log(prevSongNames);
            
			if (playState == true) {
				allSongs[0].load();
				allSongs[0].play();
			}
		}
	}
	if (key == 37) {
		if (prevSongs.length != 0) {
            var nowPlayingName = document.querySelector(".now-playing");
            var playPrevSongs = document.querySelector("#previous");
            var nowPlaying = "";
            
            if (prevSongNames.length == 1) {
                nowPlayingName.innerHTML = "<p class='songs'>[Le Gang] Drops In Mind</p>";
            } else {
                nowPlaying = prevSongNames[prevSongNames.length - 1].innerHTML;
                nowPlayingName.innerHTML = nowPlaying;
            }
            
            
			allSongs[0].pause();
			allSongs.unshift(prevSongs[0]);
			prevSongs.shift();
            
			prevSongNames.pop();
            
            
            
            console.log(prevSongNames[0]);
            
            if (prevSongNames.length > 0) {
                playPrevSongs.innerHTML = '<p class="songs">[Le Gang] Drops In Mind</p>';
            } else {
                 playPrevSongs.innerHTML = "";
            }
            
            if (nowPlaying != nowPlaying) {
                playPrevSongs.innerHTML = "";
            }
            
            for (var i = 1 ; i < prevSongNames.length; i++) {
                playPrevSongs.innerHTML = '<p class="songs">' + prevSongNames[i].innerHTML + '</p>' + playPrevSongs.innerHTML;   
            };
            
            console.log(prevSongNames);
            
            
			if (playState == true) {
				allSongs[0].load();
				allSongs[0].play();
			}
		}
	}
	
	console.log(e.keyCode);
}

window.addEventListener('keydown', keyPress);