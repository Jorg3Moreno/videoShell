function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
  this.plugins.forEach(plugin => {
    plugin.run(this);
  });
};

MediaPlayer.prototype.playPause = function() {
  this.media.paused ? this.media.play() : this.media.pause();
};

MediaPlayer.prototype.muteUnmute = function() {
  this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
};

export default MediaPlayer;
