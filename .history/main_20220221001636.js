let music = document.getElementById("song");
let isplaysong = true;
let opacity = document.querySelector(".quotes-css");
var cusor = document.getElementById("cusor");
function playsong() {
  if (isplaysong) {
    music.play();
    isplaysong = false;
    opacity.classList.add("opacity-quotes");

    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cusor.style.left = x + "px";
      cusor.style.top = y + "px";
    });
  } else {
    music.pause();
    isplaysong = true;
    opacity.classList.remove("opacity-quotes");
  }
}
