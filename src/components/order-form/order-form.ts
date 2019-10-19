import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the OrderFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'order-form',
  templateUrl: 'order-form.html'
})
export class OrderFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;

  isSubmitted: boolean = false;

  @Output() isFormValid = new EventEmitter<boolean>();
  @Input() states: string[];
  @Input() countries: string[];

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z,. ]*/)]
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z,. ]*/)]
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      address: ['', [Validators.required]],
      city: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z,. ]*/)]
      ],
      country: ['United States', [Validators.required]],
      state: ['', [Validators.required]],
      postalCode: ['', [Validators.required]]
    });
  }

  onSubmitOrderForm() {
    this.isSubmitted = true;

    if (this.form.valid) {
      this.isFormValid.emit(true);
    }
  }
}
