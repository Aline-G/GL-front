import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../services/dynamical-functions/SharedService";
import {ApiService} from "../../../services/api.service";
import {window} from "rxjs";

@Component({
  selector: 'app-confirmation-delete',
  templateUrl: './confirmation-delete.component.html',
  styleUrls: ['./confirmation-delete.component.css']
})
export class ConfirmationDeleteComponent implements OnInit {

  id!: number
  type!: number

  public deleteElement() : void{


    if(this.type==0){
      this.apiService.deleteExpenseBill(this.id);
    }
    if(this.type==1){
      this.apiService.deleteLineBill(this.id);
    }
    if(this.type==2){
      this.apiService.deleteAdvance(this.id);
    }



  }

  constructor( private sharedService : SharedService , private apiService : ApiService) {
     this.sharedService.billDelete
      .subscribe({
        next: (listn: number[]) => {

          this.id = listn[0]
          this.type = listn[1]
          }
        }
      );

    this.sharedService.lineBillDelete
      .subscribe({
          next: (listn: number[]) => {
            this.id = listn[0]
            this.type = listn[1]
          }
        }
      );

    this.sharedService.advanceDelete
      .subscribe({
          next: (listn: number[]) => {
            this.id = listn[0]
            this.type = listn[1]
          }
        }
      );
  }

  ngOnInit(): void {
  }

}
