import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

import {Advance} from "../../model/advance";
import {SharedService} from "../../services/dynamical-functions/SharedService";

@Component({
  selector: 'app-home-advance',
  templateUrl: './home-advance.component.html',
  styleUrls: ['./home-advance.component.css']
})

export class HomeAdvanceComponent implements OnInit {
  advances!: Advance[];

  onAdvanceClicked(id : number) : void {
    this.sharedService.clickOnBillEvent.emit(id);
  }

  constructor(private apiService: ApiService,  private sharedService : SharedService){
  }

  ngOnInit(): void {
    this.apiService.getAdvanceBillList()
      .subscribe({
        next: (res) => {
          this.advances = res;
          console.log(res);
        },
        error: (e) => console.error(e)
      });
  }

}
