import { Component, output } from '@angular/core';
import { NavSection } from '../nav-section/nav-section';
import { Card } from '@src/app/core/models';
import { Cards } from '../cards/cards';

@Component({
  selector: 'app-dev-and-int',
  imports: [NavSection, Cards],
  templateUrl: './dev-and-int.html',
  styleUrl: './dev-and-int.scss',
})
export class DevAndInt {
  readonly cards: Card[] = [
    {
      src: 'customized-development-1x.png',
      srcset: 'customized-development-2x.png',
      title: 'Tailor-made solutions for your business',
      description:
        "Can't find a ready-made solution that fits? We can custom build mobile & web applications to suit your business needs.",
      subTitle: 'Customised Development',
    },
    {
      src: 'integration-and-api-management-1x.png',
      srcset: 'integration-and-api-management-2x.png',
      title: 'Achieve digital transformation via an API management ecosystem',
      description:
        "Venture into the mobile space with our mobility services. From mobile-first websites to mobile apps, we're ready to help you develop a mobile solution that works.",
      subTitle: 'Integration & API Management',
    },
    {
      src: 'cloud-native-development-1x.png',
      srcset: 'cloud-native-development-2x.png',
      title: 'Enhance your business in a cloud-native environment',
      description:
        'Improve business agility, velocity and flexibility through the cloud - we are here to guide you through the entire process.',
      subTitle: 'Cloud-native Development',
    },
    {
      src: 'mobile-development-1x.png',
      srcset: 'mobile-development-2x.png',
      title: 'Become an anywhere business',
      description:
        "From mobile-first websites to mobile apps, we're ready to help you develop a mobile solution that works.",
      subTitle: 'Mobile Development',
    },
    {
      src: 'application-modernisation-1x.png',
      srcset: 'application-modernisation-2x.png',
      title: 'Breathing new life into old technology',
      description:
        'Give legacy or aging systems a new lease on life. We can help you modernise them to better serve your business needs.',
      subTitle: 'Application Modernisation',
    },
  ];
}
