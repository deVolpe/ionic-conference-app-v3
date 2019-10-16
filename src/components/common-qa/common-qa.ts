import { Component } from '@angular/core';

/**
 * Generated class for the CommonQaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'common-qa',
  templateUrl: 'common-qa.html'
})
export class CommonQaComponent {

  text: string;

  constructor() {
    console.log('Hello CommonQaComponent Component');
    this.text = 'Hello World';
  }

}
