import { Component, OnInit } from '@angular/core';
import {LineBill} from "../../model/lineBill";
import {ApiService} from "../../services/api.service";
import {SharedService} from "../../services/dynamical-functions/SharedService";
import {ConfirmationDeleteComponent} from "../pop-up/confirmation-delete/confirmation-delete.component";
import {MatDialog} from "@angular/material/dialog";
import {Advance} from "../../model/advance";

@Component({
  selector: 'app-home-expenses',
  templateUrl: './home-expenses.component.html',
  styleUrls: ['./home-expenses.component.css']
})
export class HomeExpensesComponent implements OnInit {
  filteredlineBills!: LineBill[];
  advances!: Advance[];

  set filteredExpense(lineBills : LineBill[]){
    this.filteredlineBills = lineBills;
  }

  trashClicked(id : number) : void {
    /*this function allows to delete a bill in confirmation delete component,
   the first argument is the id of the bill to delete and the second one is 0 which is a code to say that it's a bill*/
    this.dialogRef.open(ConfirmationDeleteComponent);
    this.sharedService.lineBillDelete.emit([id, 1]);

  }

  constructor(private apiService:ApiService, private sharedService : SharedService, private dialogRef : MatDialog) {
    sharedService.clickOnBillEvent.subscribe(
      (billId: number) => {
        this.apiService.getLineBillListByExpenseId(billId).then(res => {
          this.filteredlineBills = res!;}
        );
    });
    sharedService.clickOnBillEvent.subscribe(
      (billId: number) => {
        this.apiService.getExpenseBillWithId(billId).then(res => {
          this.advances = res!.listAdvance;}
        );
      });
  }

  ngOnInit(): void {

    /*this.apiService.getLineBillList()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.filteredlineBills = res;
        },
        error: (e) => console.error(e)
      });
*/
  }

}
