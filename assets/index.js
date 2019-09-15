// Cuando se usa type module hay que especificar *.js
import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const btnPlayPause = document.getElementById("btnPlayPause");
const btnMuteUnmute = document.getElementById("btnMuteUnmute");

const player = new MediaPlayer({
  el: video
  // plugins: [new AutoPlay()]
});

btnPlayPause.onclick = () => player.playPause();
btnMuteUnmute.onclick = () => player.muteUnmute();
