import { Component, OnInit } from '@angular/core';
import {ExpenseBill} from "../model/expenseBill";
import {ApiService} from "../services/api.service";
import {SharedService} from "../services/dynamical-functions/SharedService";
import {Router} from '@angular/router'
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MatDialog} from "@angular/material/dialog";
import {PopUpViewComponent} from "./pop-up-view/pop-up-view.component";
import {Advance} from "../model/advance";



@Component({
  selector: 'app-home-view-expense-bills',
  templateUrl: './home-view-expense-bills.component.html',
  styleUrls: ['./home-view-expense-bills.component.css']
})
export class HomeViewExpenseBillsComponent implements OnInit {

  expenseBills!: ExpenseBill[];
  advances! : Advance[];
  userId!:number;

  constructor(private apiService: ApiService, private sharedService : SharedService, private router:Router,private modalService: NgbModal,  private dialogRef : MatDialog) { }

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
      , 400);


    setTimeout(() =>
        this.apiService.getAdvanceListByUserId(this.userId)
          .subscribe({
            next: (res) => {
              this.advances = res;
              console.log(res);
              console.log(this.userId);
            },
            error: (e) => console.error(e)
          })
      , 700);




    /*this.apiService.getAdvanceBillList()
      .subscribe({
        next: (res) => {
          this.advances = res;
        },
        error: (e) => console.error(e)
      });*/
  }

  openDialog(id : number){
    this.dialogRef.open(PopUpViewComponent);
    this.sharedService.clickOnBillEvent.emit(id);
  }


  advanceClicked(idAdvance: number) {
    this.apiService.askAdvanceValidation(idAdvance);
    window.location.reload();
  }
}
