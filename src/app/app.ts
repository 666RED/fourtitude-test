import { Component, HostListener, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { Landing } from '@src/app/features/main-page/landing/landing';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Landing, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('fourtitude-test');
}
