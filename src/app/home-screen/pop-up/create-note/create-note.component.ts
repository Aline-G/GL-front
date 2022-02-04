import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ApiService} from "../../../services/api.service";
import {SharedService} from "../../../services/dynamical-functions/SharedService";
import {AlertErrorComponent} from "../../../alert-error/alert-error.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

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

  userId!:number;

  errorMessage = '';
  header = 'Echec création de note';
  level = 'danger';

  constructor(private modalService: NgbModal, private apiService: ApiService, private sharedService : SharedService,  private dialogRef : MatDialog, private router:Router){}

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }


  public createNewExpenseBill() : void {
      console.log(this.noteDate);
      this.apiService.createNewExpenseBill(this.noteName,this.noteDescription,this.noteDate,this.userId).then(() =>{
      this.level = 'success';
      this.header = 'Succès création de la note';
      this.errorMessage = 'Création de note réalisée avec succès';

      this.dialogRef.open(AlertErrorComponent);
      this.sharedService.clickOnAlert.emit([this.level,this.header,this.errorMessage]);
      //this.reloadCurrentRoute();


    }).catch(exception => {
      this.errorMessage = exception.error;

      this.dialogRef.open(AlertErrorComponent);
      this.sharedService.clickOnAlert.emit([this.level,this.header,this.errorMessage]);
      //this.reloadCurrentRoute();
    });


  }

  open(content: any) {
    this.modalService.open(content,
      {ariaLabelledBy: 'modal-basic-title'}).result.then(() => {this.closeResult = 'Closed with: ${result}';
    }, () => {
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
    this.apiService.getActualUser().subscribe({
      next: (res) => {
        this.userId = res;
      },
      error: (e) => console.error(e)
    });
  }

}
