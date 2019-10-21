import { Component, ViewChild } from '@angular/core';
import { IonicPage, ToastController, Slides } from 'ionic-angular';
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
  @ViewChild(Slides) slides: Slides;

  toggleImg: boolean = false;
  states: string[] = ['Illinois'];
  countries: string[] = ['United States', 'Canada', 'Austalia'];

  constructor(private toastController: ToastController) {}

  isFormValid(valid: any) {
    if (valid) {
      this.toggleImg = valid;
      this.slides.slideNext();
      this.presentToast();
    }
  }

  presentToast() {
    const toast = this.toastController.create({
      message: 'Success',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
