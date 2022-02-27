let music = document.getElementById("song");
let isplaysong = true;
let opacity = document.querySelector(".quotes-css");
var cusor = document.getElementById("cusor");
let play = document.querySelector(".play");
function playsong() {
  if (isplaysong) {
    music.play();
    isplaysong = false;
    opacity.classList.add("opacity-quotes");
    play.classList.add("background-play");
  } else {
    music.pause();
    isplaysong = true;
    opacity.classList.remove("opacity-quotes");
    play.classList.remove("background-play");
  }
}

var clickcircle = document.querySelector(".background-2");
function clickright() {
  clickcircle.classList.add("click-circle");
}
