import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'app-create-line',
  templateUrl: './create-line.component.html',
  styleUrls: ['./create-line.component.css']
})
export class CreateLineComponent implements OnInit {


  /* paramètres pour une nouvelle ligne de frais */
  @Input() titre!: string;
  @Input() date!: Date;
  @Input() lineMission!: string;
  @Input() category!: string;
  @Input() paymentMethod!: string;
  @Input() country!: string;
  @Input() associatedNote!: string;
  @Input() ttc!: string;
  @Input() currency!: string;
  @Input() tva!: string;
  @Input() rate!: number;
  @Input() description!: string;
  @Input() supportingDocuments!: string;
  closeResult = '';


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
  }

}
