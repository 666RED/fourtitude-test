export interface Card {
  src: string;
  srcset: string;
  title: string;
  description: string;
  subTitle: string;
}

export type NavLinkType = '#dev-and-int' | '#ui-and-ux' | '#connect';

export interface NavLinkInterface {
  href: NavLinkType | '';
  text: string;
}
