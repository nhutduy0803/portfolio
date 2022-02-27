let music = document.getElementById("song");
let isplaysong = true;
let opacity = document.querySelector(".quotes-css");
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
