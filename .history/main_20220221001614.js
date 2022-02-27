let music = document.getElementById("song");
let isplaysong = true;
let opacity = document.querySelector(".quotes-css");
function playsong() {
  if (isplaysong) {
    music.play();
    isplaysong = false;
    opacity.classList.add("opacity-quotes");
    var cusor = document.getElementById("cusor");
    document.addEventListener("mousemove", function (playsong) {
      var x = playsong.clientX;
      var y = playsong.clientY;
      cusor.style.left = x + "px";
      cusor.style.top = y + "px";
    });
  } else {
    music.pause();
    isplaysong = true;
    opacity.classList.remove("opacity-quotes");
  }
}
