import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicPageModule } from 'ionic-angular';
import { CommonQaComponent } from './common-qa/common-qa';
import { OrderFormComponent } from './order-form/order-form';
import { ReviewsComponent } from './reviews/reviews';

@NgModule({
  declarations: [OrderFormComponent, CommonQaComponent,
    ReviewsComponent],
  imports: [FormsModule, ReactiveFormsModule, IonicPageModule],
  exports: [OrderFormComponent, CommonQaComponent,
    ReviewsComponent]
})
export class ComponentsModule {}
