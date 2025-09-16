import {
  Component,
  ElementRef,
  HostListener,
  input,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavLinkInterface, NavLinkType } from '@src/app/core/models';
import { NavLink } from '@src/app/features/main-page/nav-link/nav-link';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, NavLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  @ViewChild('headerRef', { static: true }) headerElement!: ElementRef;

  readonly navLinks: NavLinkInterface[] = [
    {
      href: '#dev-and-int',
      text: 'Development & Integration',
    },
    {
      href: '#ui-and-ux',
      text: 'UI & UX Design',
    },
    {
      href: '#connect',
      text: 'Connect',
    },
  ];

  readonly innerWidth = signal<number>(0);
  readonly isMenuOpen = signal<boolean>(false);
  readonly currentNavLink = signal<NavLinkType>('#dev-and-int');
  readonly headerHeight = signal<number>(0);

  readonly sectionsOffsetTop = input<{ [key in NavLinkType]: number }>({
    '#dev-and-int': 0,
    '#ui-and-ux': 0,
    '#connect': 0,
  });

  readonly updateSectionsOffsetTop = input<() => void>();

  ngOnInit(): void {
    this.innerWidth.set(window.innerWidth);
    this.headerHeight.set(this.headerElement.nativeElement.offsetHeight);
  }

  toggleMenuOpen() {
    this.isMenuOpen.update((prev) => !prev);
    this.headerHeight.set(this.headerElement.nativeElement.offsetHeight);

    this.updateSectionsOffsetTop();
  }

  @HostListener('window:resize')
  onResize() {
    this.innerWidth.set(window.innerWidth);
    this.headerHeight.set(this.headerElement.nativeElement.offsetHeight);

    if (this.innerWidth() > 768) {
      this.isMenuOpen.set(false);
    }
  }
}
