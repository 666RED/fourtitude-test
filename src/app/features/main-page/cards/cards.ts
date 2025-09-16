import { Component, input } from '@angular/core';
import { Card as CardInterface } from '@src/app/core/models/index';
import { Card } from '../card/card';

@Component({
  selector: 'app-cards',
  imports: [Card],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {
  readonly cards = input<CardInterface[]>([]);
}
