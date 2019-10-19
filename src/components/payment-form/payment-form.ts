import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the PaymentFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'payment-form',
  templateUrl: 'payment-form.html'
})
export class PaymentFormComponent {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      carNumber: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
      expiryMonth: [1, [Validators.required]],
      expiryYear: [2019, [Validators.required]]
    });
  }
}
