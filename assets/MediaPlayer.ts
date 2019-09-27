class MediaPlayer {
  private media: HTMLMediaElement;
  private plugins: Array<any>;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlugins();
  }

  private initPlugins() {
    // const player = {
    //   playPause: () => this.playPause(),
    //   media: this.media,
    //   // MediaPlayer api muted value using getters and setters
    //   get muted() {
    //     return this.media.muted;
    //   },
    //   set muted(value) {
    //     this.media.muted = value;
    //   }
    // };

    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }

  playPause() {
    this.media.paused ? this.media.play() : this.media.pause();
  }

  muteUnmute() {
    this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
  }
}

export default MediaPlayer;
