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
var opaimgbackground2 = document.querySelector(".img-background-2");
var closebackground1 = document.querySelector(".background-1");
var clickcircle = document.querySelector(".background-2");
function clickright() {
  clickcircle.classList.toggle("click-circle");
  closebackground1.classList.toggle("close-background-1");
  opaimgbackground2.classList.toggle("opopaimgbackground2");
}

let clickrigthproject = document.querySelector(".scroll");
function clickproject() {
  clickrigthproject.classList.add("rigthproject");
  opaimgbackground2.classList.toggle("opopaimgbackground2");
}
