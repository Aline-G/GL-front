import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  /* paramètres pour une nouvelle note de frais */
  closeResult = '';
  @Input() noteName!: string;
  @Input() noteDescription!: string;
  @Input() noteDate!: string;

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



  constructor(private modalService: NgbModal, private apiService: ApiService){}

  public createNewExpenseBill() : void {
    this.apiService.createNewExpenseBill(this.noteName,this.noteDescription,this.noteDate);
  }

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
