import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StopWatch } from './stop-watch/stop-watch';

@Component({
  selector: 'app-root',
  imports: [StopWatch],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('StopWatch');
}
