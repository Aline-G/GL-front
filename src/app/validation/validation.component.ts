import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {SharedService} from "../services/dynamical-functions/SharedService";
import {Advance} from "../model/advance";
import {ExpenseBill} from "../model/expenseBill";
import {Router} from '@angular/router'
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MatDialog} from "@angular/material/dialog";
import {PopUpNoteComponent} from "./pop-up-note/pop-up-note.component";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  advances!: Advance[];
  expenseBills!: ExpenseBill[];

  constructor(private apiService: ApiService, private sharedService : SharedService, private router:Router,private modalService: NgbModal,  private dialogRef : MatDialog) {
  }

  openNotePopUp(id : number){
    this.dialogRef.open(PopUpNoteComponent);
    this.sharedService.clickOnBillEvent.emit(id);
  }
  advanceValid(idAdvance: number) {
    this.apiService.advanceValidation(idAdvance);
    window.location.reload();
  }
  advanceRefuse(idAdvance: number) {
    this.apiService.advanceRefusal(idAdvance);
    window.location.reload();
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
    this.apiService.getExpenseBillList()
      .subscribe({
        next: (res) => {
          this.expenseBills = res;
          console.log(res);
        },
        error: (e) => console.error(e)
      });
  }

  refreshPage(): void{
    this.apiService.getExpenseBillList()
      .subscribe({
        next: (res) => {
          this.expenseBills = res;
          console.log(res);
        },
        error: (e) => console.error(e)
      });
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


//TODO :
// - Validation ou refus d'une note de frais avec les methodes du back
// - Traiter les 2 états validated ou draft
