function AutoPlay() {}

AutoPlay.prototype.run = function(player) {
  // passing value to muted using getter and setter
  if (!player.muted) {
    player.muted = true;
  }
  player.playPause();
};

export default AutoPlay;
