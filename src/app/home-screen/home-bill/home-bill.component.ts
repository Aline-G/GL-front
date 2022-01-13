import { Component, OnInit } from '@angular/core';
import {LineBill} from "../../model/lineBill";
import {ApiService} from "../../services/api.service";
import {ExpenseBill} from "../../model/expenseBill";

@Component({
  selector: 'app-home-bill',
  templateUrl: './home-bill.component.html',
  styleUrls: ['./home-bill.component.css']
})
export class HomeBillComponent implements OnInit {
  expenseBills!: ExpenseBill[];

  constructor(private apiService: ApiService) {}


  ngOnInit(): void {
    this.apiService.getExpenseBillList()
      .subscribe({
        next: (res) => {
          this.expenseBills = res;
          console.log("mes couilles");
          console.log(res);
        },
        error: (e) => console.error(e)
      });
  }
}
