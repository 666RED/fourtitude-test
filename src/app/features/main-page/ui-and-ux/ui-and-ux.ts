import { Component } from '@angular/core';
import { NavSection } from '../nav-section/nav-section';
import { Card } from '@src/app/core/models';
import { Cards } from '../cards/cards';

@Component({
  selector: 'app-ui-and-ux',
  imports: [NavSection, Cards],
  templateUrl: './ui-and-ux.html',
  styleUrl: './ui-and-ux.scss',
})
export class UiAndUx {
  readonly cards: Card[] = [
    {
      src: 'user-experience-1x.png',
      srcset: 'user-experience-2x.png',
      title: 'Intuitive digital experiences to elevate your business',
      description:
        'Through good UX design, we can help you capture and retain the trust, business and loyalty of key customer groups.',
      subTitle: 'User Experience',
    },
    {
      src: 'user-interface-1x.png',
      srcset: 'user-interface-2x.png',
      title: 'Deliver memorable brand experiences using human-centred design',
      description:
        'We meld innovation and technology with content and design best practices to translate your business goals into experiences that are meaningful to customers.',
      subTitle: 'User Interface',
    },
    {
      src: 'cloud-marketing-1x.png',
      srcset: 'cloud-marketing-2x.png',
      title: 'Leverage cloud applications for digital marketing efficacy',
      description:
        'Through social media and cloud marketing, we help create impactful digital campaigns and experiences that are bound to captivate audiences.',
      subTitle: 'Cloud Marketing',
    },
  ];
}
