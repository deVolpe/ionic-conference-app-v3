import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderPage } from './order';
import { OrderFormComponent } from '../../components/order-form/order-form';

@NgModule({
  declarations: [OrderPage, OrderFormComponent],
  imports: [IonicPageModule.forChild(OrderPage)],
  exports: [OrderPage]
})
export class OrderPageModule {}
