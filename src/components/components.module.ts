import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicPageModule } from 'ionic-angular';
import { CommonQaComponent } from './common-qa/common-qa';
import { OrderFormComponent } from './order-form/order-form';
import { ReviewsComponent } from './reviews/reviews';
import { PaymentFormComponent } from './payment-form/payment-form';

@NgModule({
  declarations: [
    OrderFormComponent,
    CommonQaComponent,
    ReviewsComponent,
    PaymentFormComponent
  ],
  imports: [FormsModule, ReactiveFormsModule, IonicPageModule],
  exports: [
    OrderFormComponent,
    CommonQaComponent,
    ReviewsComponent,
    PaymentFormComponent
  ]
})
export class ComponentsModule {}
