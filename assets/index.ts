// Cuando se usa type module hay que especificar *.js
import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/Ads";

const video: HTMLElement = document.querySelector("video");
const btnPlayPause: HTMLElement = document.getElementById("btnPlayPause");
const btnMuteUnmute: HTMLElement = document.getElementById("btnMuteUnmute");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()]
});

btnPlayPause.onclick = () => player.playPause();
btnMuteUnmute.onclick = () => player.muteUnmute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(error => {
    console.log(error.message);
  });
}
