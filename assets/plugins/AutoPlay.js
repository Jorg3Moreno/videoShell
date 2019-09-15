function AutoPlay() {}

AutoPlay.prototype.run = function(player) {
  player.muteUnmute();
  player.playPause();
};

export default AutoPlay;
