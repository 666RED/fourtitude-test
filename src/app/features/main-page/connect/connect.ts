import { Component, inject } from '@angular/core';
import { NavSection } from '../nav-section/nav-section';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from '@src/app/core/services/alert-service';

@Component({
  selector: 'app-connect',
  imports: [NavSection, ReactiveFormsModule],
  templateUrl: './connect.html',
  styleUrl: './connect.scss',
})
export class Connect {
  connectForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    contactNo: new FormControl('', { nonNullable: true }),
    additionalInfo: new FormControl('', { nonNullable: true }),
  });

  readonly alertService = inject(AlertService);

  clearForm() {
    this.connectForm.reset();
  }

  validateForm(): boolean {
    return this.connectForm.valid && this.validateEmail();
  }

  validateEmail() {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    return emailRegex.test(this.connectForm.value.email!);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    this.clearForm();
    // If the request is successfully sent
    this.alertService.showAlert('Thank you! We will get in touch with you as soon as possible.');
  }
}
