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
}

export default AutoPause;
