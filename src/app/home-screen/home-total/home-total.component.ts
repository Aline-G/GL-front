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
  actualUser!: number

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {

    this.apiService.getActualUser().subscribe(
      {
        next: (res) => {
          this.actualUser = res;
          console.log(res);
        },
        error: (e) => console.error(e)
      });

    setTimeout(() =>
    this.apiService.getTotalExpenseBill(this.actualUser).then(res => this.total = res).catch((e) => console.error(e))
      , 1000);
    setTimeout(() =>
    this.apiService.getNumberBillsNonValidated(this.actualUser).then(res => this.listNonValidated = res).catch((e) => console.error(e))
      , 1000);


  }

}
