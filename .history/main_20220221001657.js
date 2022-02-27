let music = document.getElementById("song");
let isplaysong = true;
let opacity = document.querySelector(".quotes-css");
var cusor = document.getElementById("cusor");
var x = e.clientX;
var y = e.clientY;
function playsong() {
  if (isplaysong) {
    music.play();
    isplaysong = false;
    opacity.classList.add("opacity-quotes");
  } else {
    music.pause();
    isplaysong = true;
    opacity.classList.remove("opacity-quotes");
  }
}

document.addEventListener("mousemove", function (e) {
  cusor.style.left = x + "px";
  cusor.style.top = y + "px";
});
