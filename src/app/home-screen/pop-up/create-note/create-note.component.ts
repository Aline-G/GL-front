import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ApiService} from "../../../services/api.service";
import {SharedService} from "../../../services/dynamical-functions/SharedService";

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {


  /* paramètres pour une nouvelle note de frais */
  closeResult = '';
  @Input() noteName!: string;
  @Input() noteDescription!: string;
  @Input() noteDate!: string;

  constructor(private modalService: NgbModal, private apiService: ApiService, private sharedService : SharedService){
    sharedService.clickOnAddBill.subscribe(
      (openModal: boolean) => {
        //TODO
      });
  }

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
