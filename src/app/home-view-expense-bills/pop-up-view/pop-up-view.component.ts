import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ApiService} from "../../services/api.service";
import {LineBill} from "../../model/lineBill";
import {SharedService} from "../../services/dynamical-functions/SharedService";
import {ExpenseBill} from "../../model/expenseBill";


@Component({
  selector: 'app-pop-up-view',
  templateUrl: './pop-up-view.component.html',
  styleUrls: ['./pop-up-view.component.css']
})
export class PopUpViewComponent implements OnInit {

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


  onClickEvent() : void{
    this.apiService.askValidation(this.expenseBill.id);
    window.location.reload();
  }





}
