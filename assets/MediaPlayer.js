function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
  const player = {
    playPause: () => this.playPause(),
    media: this.media,

    // MediaPlayer api muted value using getters and setters
    get muted() {
      return this.media.muted;
    },
    set muted(value) {
      this.media.muted = value;
    }
  };

  this.plugins.forEach(plugin => {
    plugin.run(player);
  });
};

MediaPlayer.prototype.playPause = function() {
  this.media.paused ? this.media.play() : this.media.pause();
};

MediaPlayer.prototype.muteUnmute = function() {
  this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
};

export default MediaPlayer;
