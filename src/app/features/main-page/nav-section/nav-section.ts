import { Component, input } from '@angular/core';

@Component({
  selector: 'app-nav-section',
  imports: [],
  templateUrl: './nav-section.html',
  styleUrl: './nav-section.scss',
})
export class NavSection {
  sectionTitle = input<string>('');
  description = input<string>('');
  sectionId = input<string>('');
}
