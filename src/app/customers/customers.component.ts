import { DataService } from './../core/data.service';
import { ICustomer } from './../shared/interfaces';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  title: string;
  people: ICustomer[];
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.title = 'Customers';
    this.dataService.getCustomers().subscribe(
      (customers: ICustomer[]) => this.people = customers
    );
  }

}
