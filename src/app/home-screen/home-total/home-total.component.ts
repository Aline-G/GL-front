import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-home-total',
  templateUrl: './home-total.component.html',
  styleUrls: ['./home-total.component.css']
})
export class HomeTotalComponent implements OnInit {
  total !: number
  listNonValidated!: number

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {

    this.apiService.getTotalExpenseBill()
      .subscribe({
        next: (res) => {
          this.total = res;
        },
        error: (e) => console.error(e)
      });

    this.apiService.getNumberBillsNonValidated()
      .subscribe({
        next: (res) => {
          this.listNonValidated = res;
        },
        error: (e) => console.error(e)
      });
  }

}
