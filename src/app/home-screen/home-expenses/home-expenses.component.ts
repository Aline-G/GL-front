import { Component, OnInit } from '@angular/core';
import {LineBill} from "../../model/lineBill";
import {ApiService} from "../../services/api.service";
import {SharedService} from "../../services/dynamical-functions/SharedService";

@Component({
  selector: 'app-home-expenses',
  templateUrl: './home-expenses.component.html',
  styleUrls: ['./home-expenses.component.css']
})
export class HomeExpensesComponent implements OnInit {
  filteredlineBills!: LineBill[];

  set filteredExpense(lineBills : LineBill[]){
    this.filteredlineBills = lineBills;
  }

  constructor(private apiService:ApiService, private sharedService : SharedService) {
    sharedService.clickOnBillEvent.subscribe(
      (billId: number) => {
        this.apiService.getLineBillListByExpenseId(billId).then(res => {
          this.filteredlineBills = res!;}
        );
    });
  }

  ngOnInit(): void {
    /*
    this.apiService.getLineBillList()
      .subscribe({
        next: (res) => {
          this.lineBills = res;
          this.filteredlineBills = res;
        },
        error: (e) => console.error(e)
      });
      */
  }

}
