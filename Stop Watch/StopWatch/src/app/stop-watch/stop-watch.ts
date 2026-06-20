import { Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  imports: [],
  templateUrl: './stop-watch.html',
  styleUrl: './stop-watch.css',
})
export class StopWatch implements OnDestroy {
  time = signal(0);

  interval: ReturnType<typeof setInterval> | null = null;

  start() {
    if (this.interval) return;

    this.interval = setInterval(() => {
      this.time.update((v) => v + 1);
    }, 1000);
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  reset() {
    this.stop();
    this.time.set(0);
  }

  ngOnDestroy() {
    this.stop();
  }
}
