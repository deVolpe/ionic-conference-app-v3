import { NgModule } from '@angular/core';
import { OrderFormComponent } from './order-form/order-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [OrderFormComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(OrderFormComponent)
  ],
  exports: [OrderFormComponent]
})
export class ComponentsModule {}
