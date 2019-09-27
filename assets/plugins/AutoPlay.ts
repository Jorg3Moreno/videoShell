import MediaPlayer from "../MediaPlayer";

class AutoPlay {
  constructor() {}

  run(player: MediaPlayer) {
    // passing value to muted using getter and setter
    if (!player.media.muted) {
      player.media.muted = true;
    }
    // player.playPause();
  }
}

export default AutoPlay;
