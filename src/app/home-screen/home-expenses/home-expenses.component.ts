import { Component, OnInit } from '@angular/core';
import {LineBill} from "../../model/lineBill";
import {ApiService} from "../../services/api.service";
import {SharedService} from "../../services/dynamical-functions/SharedService";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-home-expenses',
  templateUrl: './home-expenses.component.html',
  styleUrls: ['./home-expenses.component.css']
})
export class HomeExpensesComponent implements OnInit {
  lineBills!: LineBill[];
  filteredlineBills!: LineBill[];

  billId!: number;

  get filteredExpense(): LineBill[]{
      this.lineBills = this.lineBills?.filter(
        lineBill => lineBill?.idExpenseBill == this?.billId
      );
    return this.lineBills;
  }

  constructor(private apiService:ApiService, private sharedService : SharedService) {
    sharedService.clickOnBillEvent.subscribe(
      (billId: number) => {
        this.billId = billId;
    },
    this.filteredlineBills = this.filteredExpense
    );
  }

  ngOnInit(): void {
    this.apiService.getLineBillList()
      .subscribe({
        next: (res) => {
          this.lineBills = res;
          console.log(res);
        },
        error: (e) => console.error(e)
      });

    this.filteredlineBills=this.lineBills;
  }

}
