import { FilterTextboxComponent } from './customers-list/filter.textbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterTextboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ CustomersComponent]
})
export class CustomersModule { }