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

// var opaimgbackground2 = document.querySelector(".img-background-2");
// var closebackground1 = document.querySelector(".background-1");
// var clickcircle = document.querySelector(".background-2");
// function clickright() {
//   clickcircle.classList.toggle("click-circle");
//   closebackground1.classList.toggle("close-background-1");
//   opaimgbackground2.classList.toggle("opopaimgbackground2");
//   clickleftt.classList.toggle("close-background-3-left");
//   addcolorproject.classList.toggle("addcolorproject");
//   addcolorproject2.classList.toggle("addcolorproject2");
//   clickrigthproject.classList.toggle("rigthproject");
// }
// var clickleftt = document.querySelector(".background-3");
// var opaimgbackground2 = document.querySelector(".img-background-2");
// var closebackground1 = document.querySelector(".background-1");
// var clickcircle = document.querySelector(".background-2");
// function clickleft() {
//   // clickcircle.classList.toggle("click-circle");
//   // closebackground1.classList.toggle("close-background-1");
//   // opaimgbackground2.classList.toggle("opopaimgbackground2");
//   clickleftt.classList.toggle("close-background-3");
//   clickcircle.classList.toggle("click-circle");
//   closebackground1.classList.toggle("close-background-1-right");
//   opaimgbackground2.classList.toggle("opopaimgbackground2");
//   // clickleftt.classList.toggle("close-background-3-left");
//   clickrigthproject.classList.toggle("rigthproject-right");
// }

// let clickrigthproject = document.querySelector(".scroll");
// let addcolorproject = document.querySelector(".menu li:nth-child(3)");
// let addcolorproject1 = document.querySelector(".menu li:nth-child(1)");
// let addcolorproject2 = document.querySelector(".menu li:nth-child(2)");
// function clickproject() {
//   clickrigthproject.classList.toggle("rigthproject");
//   clickcircle.classList.add("click-circle");
//   closebackground1.classList.toggle("close-background-1");
//   opaimgbackground2.classList.toggle("opopaimgbackground2");
//   addcolorproject.classList.toggle("addcolorproject");
//   addcolorproject2.classList.toggle("addcolorproject2");
//   clickleftt.classList.remove("close-background-3");
// }

// function clickhello() {
//   clickcircle.classList.toggle("click-circle");
//   closebackground1.classList.toggle("close-background-1");
//   clickrigthproject.classList.toggle("rigthproject");
//   addcolorproject.classList.toggle("addcolorproject");
//   addcolorproject2.classList.toggle("addcolorproject2");
//   opaimgbackground2.classList.toggle("opopaimgbackground2");
//   clickleftt.classList.remove("close-background-3");
// }

// function clickme() {
//   clickcircle.classList.toggle("click-circle");
//   closebackground1.classList.toggle("close-background-1");
//   clickrigthproject.classList.toggle("rigthproject-right");
//   addcolorproject.classList.toggle("addcolorproject");
//   addcolorproject2.classList.toggle("addcolorproject2");
//   opaimgbackground2.classList.toggle("opopaimgbackground2");
//   clickleftt.classList.toggle("close-background-3");
// }

var background1 = document.querySelector(".background-1");
var background2 = document.querySelector(".background-2");
var background3 = document.querySelector(".background-3");
var imgbackground2 = document.querySelector(".img-background-2");
var scrolltaskba = document.querySelector(".scroll");
let colortaksba1 = document.querySelector(".menu li:nth-child(1)");
let colortaksba3 = document.querySelector(".menu li:nth-child(3)");
let colortaksba3 = document.querySelector(".menu li:nth-child(2)");
function backgroundone() {}

function backgroundtwo() {
  background2.classList.toggle("open-background-2");
  imgbackground2.classList.toggle("opacity-background-2");
  background3.classList.toggle("none-background-3");
  background1.classList.toggle("none-background-1");
  scrolltaskba.classList.toggle("scroll-right");
  colortaksba3.classList.toggle("add-color-project");
}

function backgroundthree() {
  background3.classList.toggle("open-background-3");
  background1.classList.toggle("top-background-1");
  background2.classList.toggle("left-background-2");
  scrolltaskba.classList.toggle("scroll-left");
}

function clickhello() {
  scrolltaskba.classList.toggle("scroll-center");
}

function clickme() {
  scrolltaskba.classList.toggle("scroll-left");
}
