import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output() emitter = new EventEmitter<string>();
  errorMessage = '';
  header = 'Echec création de ligne';
  level = 'danger';

  constructor(private modalService: NgbModal, private apiService: ApiService, private sharedService : SharedService){
    sharedService.clickOnAddBill.subscribe(
      (openModal: boolean) => {
        //TODO
      });
  }

  public createNewExpenseBill() : void {
    this.apiService.createNewExpenseBill(this.noteName,this.noteDescription,this.noteDate).then(() =>{
      this.level = 'success';
      this.header = 'Succès création ligne';
      this.errorMessage = 'Création de ligne réalisée avec succès';
      this.emitter.emit(this.errorMessage);
    }).catch(exception => {
      this.errorMessage = exception.error;
      this.emitter.emit(this.errorMessage);
      console.log(exception.error);
    });

    //recherche automatique de la page
    //window.location.reload();
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
