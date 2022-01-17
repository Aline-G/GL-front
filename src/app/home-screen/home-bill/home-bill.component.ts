import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ExpenseBill} from "../../model/expenseBill";
import {SharedService} from "../../services/dynamical-functions/SharedService";

@Component({
  selector: 'app-home-bill',
  templateUrl: './home-bill.component.html',
  styleUrls: ['./home-bill.component.css']
})
export class HomeBillComponent implements OnInit {
  expenseBills!: ExpenseBill[];

  onBillClicked(id : number) : void {
    this.sharedService.clickOnBillEvent.emit(id);
  }

  constructor(private apiService: ApiService, private sharedService : SharedService) {

  }

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
}
