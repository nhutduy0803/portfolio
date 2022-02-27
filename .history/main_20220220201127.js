let music = document.getElementById("song");
let isplaysong = true;
function playsong() {
  if (isplaysong) {
    music.play();
    isplaysong = false;
  } else {
    music.pause();
    isplaysong = true;
  }
}
