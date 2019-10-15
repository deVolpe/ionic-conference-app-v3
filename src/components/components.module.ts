import { NgModule } from '@angular/core';
import { OrderFormComponent } from './order-form/order-form';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrderFormComponent],
  imports: [BrowserModule, FormsModule],
  exports: [OrderFormComponent]
})
export class ComponentsModule {}
