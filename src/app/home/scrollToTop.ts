export abstract class ScrollToTop {
  scrollToTop(time: number = 750): void {
    // Fancy scroll to top using timings, easing and animation frames uncomment this if you need this otherwise use the static scrollTo function
    /*let cosParameter: number = window.scrollY / 2;
    let scrollCount:  number = 0;
    let oldTimestamp: number = performance.now();
    function step (newTimestamp: number) {
      scrollCount += Math.PI / (time / (newTimestamp - oldTimestamp));
      if (scrollCount >= Math.PI) window.scrollTo(0, 0);
      if (window.scrollY === 0) return;
      window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);*/
    window.scrollTo(0, 0);
  }
}
