import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicPage } from 'ionic-angular';

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
  constructor() {}

  form: FormGroup;

  @Output() isFormValid = new EventEmitter<boolean>();

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z][a-zA-Z,. ]*/)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z][a-zA-Z,. ]*/)
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/[0-9]+/)
      ]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z][a-zA-Z,. ]*/)
      ]),
      country: new FormControl([Validators.required]),
      state: new FormControl([Validators.required]),
      postalCode: new FormControl('', [Validators.required])
    });
  }

  onSubmitOrderForm() {
    if (this.form.valid) {
      this.isFormValid.emit();
    }
  }
}
