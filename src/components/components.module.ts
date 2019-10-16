import { NgModule } from '@angular/core';
import { OrderFormComponent } from './order-form/order-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrderFormComponent],
  imports: [FormsModule, ReactiveFormsModule],
  exports: [OrderFormComponent]
})
export class ComponentsModule {}
