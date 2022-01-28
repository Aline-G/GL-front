import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ExpenseBill} from "../../model/expenseBill";
import {SharedService} from "../../services/dynamical-functions/SharedService";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDeleteComponent} from "../pop-up/confirmation-delete/confirmation-delete.component";
import {CreateLineComponent} from "../pop-up/create-line/create-line.component";

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

  plusClicked(id : number) : void {
    this.sharedService.clickOnPlusEvent.emit(id);
    this.dialogRef.open(CreateLineComponent);
  }

  trashClicked(id : number) : void {
    /*this function allows to delete a bill in confirmation delete component,
   the first argument is the id of the bill to delete and the second one is 0 which is a code to say that it's a bill*/
    this.sharedService.billDelete.emit([id,0]);
    this.dialogRef.open(ConfirmationDeleteComponent);

  /* this.sharedService.noDelete()
      .subscribe({
        next: (b : boolean ) => {
          if(b==true){
            this.apiService.deleteExpenseBill(id);
          }
        },
        error: (e : any) => console.error(e)
      }); */
  }



  openModal() : void {
    this.sharedService.clickOnAddBill.emit(true);
  }

  constructor(private apiService: ApiService, private sharedService : SharedService, private dialogRef : MatDialog ) {

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
