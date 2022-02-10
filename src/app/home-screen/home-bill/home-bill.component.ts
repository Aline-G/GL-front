import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ExpenseBill} from "../../model/expenseBill";
import {SharedService} from "../../services/dynamical-functions/SharedService";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDeleteComponent} from "../pop-up/confirmation-delete/confirmation-delete.component";
import {CreateLineComponent} from "../pop-up/create-line/create-line.component";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-home-bill',
  templateUrl: './home-bill.component.html',
  styleUrls: ['./home-bill.component.css']
})
export class HomeBillComponent implements OnInit {
  expenseBills!: ExpenseBill[];
  userId!:number;


  onBillClicked(id : number) : void {
    this.sharedService.clickOnBillEvent.emit(id);
  }

  plusClicked(id : number) : void {
    this.dialogRef.open(CreateLineComponent);
    this.sharedService.clickOnPlusEvent.emit(id);
  }

  trashClicked(id : number) : void {
    /*this function allows to delete a bill in confirmation delete component,
   the first argument is the id of the bill to delete and the second one is 0 which is a code to say that it's a bill*/
    this.dialogRef.open(ConfirmationDeleteComponent);
    this.sharedService.billDelete.emit([id,0]);
  }



  openModal() : void {
    this.sharedService.clickOnAddBill.emit(true);
  }

  constructor(private apiService: ApiService, private sharedService : SharedService, private dialogRef : MatDialog, private router:Router) {

  }

  ngOnInit(): void {

    this.apiService.getActualUser().subscribe({
      next: (res) => {
        this.userId = res;
      },
      error: (e) => console.error(e)
    });



      setTimeout(() =>
        this.apiService.getExpenseBillListByUserId(this.userId)
          .subscribe({
            next: (res) => {
              this.expenseBills = res;
            },
            error: (e) => console.error(e)
          })
        , 1000);







  }


}
