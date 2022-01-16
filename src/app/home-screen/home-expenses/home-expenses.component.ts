import { Component, OnInit } from '@angular/core';
import {LineBill} from "../../model/lineBill";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-home-expenses',
  templateUrl: './home-expenses.component.html',
  styleUrls: ['./home-expenses.component.css']
})
export class HomeExpensesComponent implements OnInit {
  lineBills!: LineBill[];
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getLineBillList()
      .subscribe({
        next: (res) => {
          this.lineBills = res;
          console.log(res);
        },
        error: (e) => console.error(e)
      });
  }

}
