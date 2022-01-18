import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ApiService} from "../../../services/api.service";
import {LineBill} from "../../../model/lineBill";
import {ExpenseBill} from "../../../model/expenseBill";
import {Mission} from "../../../model/mission";

@Component({
  selector: 'app-create-line',
  templateUrl: './create-line.component.html',
  styleUrls: ['./create-line.component.css']
})
export class CreateLineComponent implements OnInit {


  /* paramètres pour une nouvelle ligne de frais */
  @Input() titre!: string;
  @Input() date!: string;
  @Input() lineMission!: number;
  @Input() category!: string;
  @Input() paymentMethod!: string;
  @Input() country!: string;
  @Input() associatedNote!: number;
  @Input() ttc!: number;
  @Input() currency!: string;
  @Input() tva!: number;
  @Input() rate!: number;
  @Input() description!: string;
  @Input() supportingDocuments!: string;
  closeResult = '';

  expenseBills!: ExpenseBill[];
  missions! : Mission[];


  constructor(private modalService: NgbModal, private apiService: ApiService) { }


  open(content: any) {
    this.modalService.open(content,
      {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {this.closeResult = 'Closed with: ${result}';
    }, (reason) => {
      this.closeResult =
        'Dismissed ${this.getDismissReason(reason)}';
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return 'with: ${reason}';
    }
  }

  ngOnInit(): void {
    this.apiService.getExpenseBillList()
      .subscribe({
        next: (res) => {
          this.expenseBills = res;
        },
        error: (e) => console.error(e)
      });

    this.apiService.getMissionList()
      .subscribe({
        next: (res) => {
          this.missions = res;
        },
        error: (e) => console.error(e)
      });


  }

  public createNewLineBill() : void {
    this.apiService.createNewLineBill(this.ttc,this.rate,this.tva,this.date,this.description,this.lineMission,this.associatedNote,this.country);
  }




}
