import { SorterService } from './../../core/sorter.service';
import { Component, OnInit, Input} from '@angular/core';

import { ICustomer } from './../../shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  private _customers: ICustomer[] = [];
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(value: ICustomer[]) {
    if(value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode: string = 'EUR';

  constructor(private sorterService: SorterService) { }

  ngOnInit(): void {
    
  }

  

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
        this.customersOrderTotal += cust.orderTotal;
    });
  }


  filter(data: string) {
    if (data) {
        this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
            return cust.name.toLowerCase().includes(data.toLowerCase())  ||
            cust.city.toLowerCase().includes(data.toLowerCase())  ||
            cust.orderTotal.toString().includes(data);
        });
    } else {
        this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
}

  sort(prop: string) {
    //a sorter service will handle the sorting
    this.sorterService.sort(this.filteredCustomers, prop);
  }

}
