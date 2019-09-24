class AutoPause {
  constructor() {
    this.threshold = 0.25;
  }

  run(player) {
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold
    });

    observer.observe(this.player.media);

    //added event to pause video when the page is hiden
    //and play video when page is visible
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }

  handleIntersection = entries => {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;

    if (isVisible) {
      this.player.playPause();
    } else {
      this.player.playPause();
    }
  };

  handleVisibilityChange = () => {
    const isVisible = document.visibilityState === "visible";
    if (isVisible) {
      this.player.playPause();
    } else {
      this.player.playPause();
    }
  };
}

export default AutoPause;
