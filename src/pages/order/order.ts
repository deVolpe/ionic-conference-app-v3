import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import {
  ReceiverOptions,
  ShippingOptions
} from '../../interfaces/order-form-options';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {
  receiver: ReceiverOptions = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  shipping: ShippingOptions = {
    address: '',
    city: '',
    country: 'United States',
    state: '',
    postalCode: ''
  };

  inputLabels: string[] = [
    'First Name',
    'Last Name',
    'Email',
    'Phone Number',
    'Address',
    'City',
    'Country',
    'State',
    'Postal Code'
  ];

  bars: object[] = [
    {
      text: 'Replenishes and hydrates for fuller softer lips',
      isColored: false
    },
    {
      text: 'Feels like a silky gloss',
      isColored: true
    },
    { text: 'Plump your lips naturally and safely', isColored: false },
    { text: 'Feels cool on contact, thanks to peppermint oil', isColored: true }
  ];

  isSubmitted: boolean = false;

  constructor(private toastController: ToastController) {}

  presentToast() {
    const toast = this.toastController.create({
      message: 'Success',
      duration: 2000,
      position: 'center'
    });
    toast.present();
  }

  onSubmitOrderForm(form: NgForm) {
    this.isSubmitted = true;

    if (form.valid) {
      this.presentToast();
    }
  }
}
