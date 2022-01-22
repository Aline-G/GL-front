import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ApiService} from "../../services/api.service";
import {LineBill} from "../../model/lineBill";
import {SharedService} from "../../services/dynamical-functions/SharedService";

@Component({
  selector: 'app-pop-up-view',
  templateUrl: './pop-up-view.component.html',
  styleUrls: ['./pop-up-view.component.css']
})
export class PopUpViewComponent implements OnInit {

  closeResult = '';
  lineBills!: LineBill[];

  constructor(private modalService: NgbModal, private apiService: ApiService, private sharedService : SharedService) {
    sharedService.clickOnBillEvent.subscribe(
      (billId: number) => {
        this.apiService.getLineBillListByExpenseId(billId).then(res => {
          this.lineBills = res!;}
        );
      });
  }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content,
      {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {this.closeResult = 'Closed with: ${result}';
    }, (reason) => {
      this.closeResult =
        'Dismissed ${this.getDismissReason(reason)}';
    });
  }

}
