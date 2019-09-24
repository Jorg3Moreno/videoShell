// Cuando se usa type module hay que especificar *.js
import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const btnPlayPause = document.getElementById("btnPlayPause");
const btnMuteUnmute = document.getElementById("btnMuteUnmute");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()]
});

btnPlayPause.onclick = () => player.playPause();
btnMuteUnmute.onclick = () => player.muteUnmute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(error => {
    console.log(error.message);
  });
}
