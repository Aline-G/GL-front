import { Component, OnInit } from '@angular/core';
import {ExpenseBill} from "../model/expenseBill";
import {ApiService} from "../services/api.service";
import {SharedService} from "../services/dynamical-functions/SharedService";

@Component({
  selector: 'app-home-view-expense-bills',
  templateUrl: './home-view-expense-bills.component.html',
  styleUrls: ['./home-view-expense-bills.component.css']
})
export class HomeViewExpenseBillsComponent implements OnInit {

  expenseBills!: ExpenseBill[];

  constructor(private apiService: ApiService, private sharedService : SharedService) { }

  ngOnInit(): void {
    this.apiService.getExpenseBillList()
      .subscribe({
        next: (res) => {
          this.expenseBills = res;
          console.log(res);
        },
        error: (e) => console.error(e)
      });
  }

  onBillClicked(id : number) : void {
    this.sharedService.clickOnBillEvent.emit(id);
  }



}
