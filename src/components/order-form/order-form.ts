import { Component } from '@angular/core';

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
export class OrderFormComponent {

  text: string;

  constructor() {
    console.log('Hello OrderFormComponent Component');
    this.text = 'Hello World';
  }

}
