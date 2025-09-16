import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  signal,
  ViewChild,
} from '@angular/core';
import { Footer } from '@src/app/shared/components/footer/footer';
import { Header } from '@src/app/shared/components/header/header';
import { Connect } from '../connect/connect';
import { DevAndInt } from '../dev-and-int/dev-and-int';
import { UiAndUx } from '../ui-and-ux/ui-and-ux';
import { NavLinkType } from '@src/app/core/models';
import { Alert } from '@src/app/shared/components/alert/alert';

@Component({
  selector: 'app-landing',
  imports: [Header, Footer, Connect, DevAndInt, UiAndUx, Alert],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing implements AfterViewInit {
  @ViewChild('devAndIntSection', { static: false }) devAndIntSection!: ElementRef;
  @ViewChild('uiAndUxSection', { static: false }) uiAndUxSection!: ElementRef;
  @ViewChild('connectSection', { static: false }) connectSection!: ElementRef;

  readonly sectionsOffsetTop = signal<{ [key in NavLinkType]: number }>({
    '#dev-and-int': 0,
    '#ui-and-ux': 0,
    '#connect': 0,
  });

  ngAfterViewInit(): void {
    this.updateSectionsOffsetTop();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateSectionsOffsetTop();
  }

  updateSectionsOffsetTop() {
    this.sectionsOffsetTop.set({
      '#dev-and-int': this.devAndIntSection.nativeElement.offsetTop,
      '#ui-and-ux': this.uiAndUxSection.nativeElement.offsetTop,
      '#connect': this.connectSection.nativeElement.offsetTop,
    });
  }
}
