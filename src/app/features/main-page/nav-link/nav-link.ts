import { NgStyle } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { NavLinkInterface, NavLinkType } from '@src/app/core/models/index';

@Component({
  selector: 'app-nav-link',
  imports: [NgStyle],
  templateUrl: './nav-link.html',
  styleUrl: './nav-link.scss',
})
export class NavLink {
  readonly currentNavLinkChange = output<string>();
  readonly currentNavLink = input<NavLinkType | ''>('');
  readonly props = input<NavLinkInterface>({
    href: '',
    text: '',
  });
  readonly currentHeaderHeight = input<number>(0);
  readonly sectionsOffsetTop = input<{ [key in NavLinkType]: number }>();

  handleScroll() {
    const href = this.props().href;
    const sections = this.sectionsOffsetTop();
    if (!sections || href === '') {
      return;
    }
    const targetOffset = sections ? sections[href] : 0;

    this.currentNavLinkChange.emit(href);
    window.scrollTo({ top: targetOffset - this.currentHeaderHeight(), behavior: 'smooth' });
  }
}
