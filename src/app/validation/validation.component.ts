import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {SharedService} from "../services/dynamical-functions/SharedService";
import {Advance} from "../model/advance";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  advances!: Advance[];

  constructor(private apiService: ApiService, private sharedService : SharedService) {
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
