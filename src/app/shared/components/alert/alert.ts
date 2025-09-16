import { Component, inject, signal } from '@angular/core';
import { AlertService } from '@src/app/core/services/alert-service';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.scss',
})
export class Alert {
  readonly alertService = inject(AlertService);

  closeAlert() {
    this.alertService.closeAlert();
  }
}
