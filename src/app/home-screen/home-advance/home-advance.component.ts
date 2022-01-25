import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

import {Advance} from "../../model/advance";

@Component({
  selector: 'app-home-advance',
  templateUrl: './home-advance.component.html',
  styleUrls: ['./home-advance.component.css']
})

export class HomeAdvanceComponent implements OnInit {
  advances!: Advance[];


  constructor(private apiService: ApiService){
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
