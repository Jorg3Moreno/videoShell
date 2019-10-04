class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }

  initPlayer = () => {
    this.container = document.createElement("div");
    this.container.style.position = "relative";
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  };

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
