import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  readonly alert = signal<boolean>(false);
  readonly message = signal<string>('');

  showAlert(message: string) {
    this.message.set(message);
    this.alert.set(true);
  }

  closeAlert() {
    this.message.set('');
    this.alert.set(false);
  }
}
