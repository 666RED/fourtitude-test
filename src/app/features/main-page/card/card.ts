import { Component, input } from '@angular/core';
import { Card as CardInterface } from '@src/app/core/models/index';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  card = input<CardInterface>({
    src: '',
    srcset: '',
    title: '',
    description: '',
    subTitle: '',
  });
}
