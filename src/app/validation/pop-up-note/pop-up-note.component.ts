import { Component, OnInit } from '@angular/core';
import {ExpenseBill} from "../../model/expenseBill";
import {LineBill} from "../../model/lineBill";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ApiService} from "../../services/api.service";
import {SharedService} from "../../services/dynamical-functions/SharedService";

@Component({
  selector: 'app-pop-up-note',
  templateUrl: './pop-up-note.component.html',
  styleUrls: ['./pop-up-note.component.css']
})
export class PopUpNoteComponent implements OnInit {

  closeResult = '';
  lineBills!: LineBill[];
  billId! :number;
  expenseBill! : ExpenseBill;

  constructor(private modalService: NgbModal, private apiService: ApiService, private sharedService : SharedService) {

    this.sharedService.clickOnBillEvent.subscribe(
      (billId: number) => {
        this.apiService.getExpenseBillWithId(billId).then(res => {
          this.expenseBill = res!;}
        );
        this.apiService.getLineBillListByExpenseId(billId).then(res => {
          this.lineBills = res!;}
        );
      });
  }

  ngOnInit(): void {
  }

  ValidExpenseBill() : void{
    this.apiService.expenseBillValidation(this.expenseBill.id);
    window.location.reload();
  }
  RefuseExpenseBill() : void{
    //this.apiService.expenseBillValidation(this.expenseBill.id);
    //window.location.reload();
  }
}
