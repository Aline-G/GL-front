import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ApiService} from "../../../services/api.service";
import {SharedService} from "../../../services/dynamical-functions/SharedService";
import {Mission} from "../../../model/mission";
import {AlertErrorComponent} from "../../../alert-error/alert-error.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-create-advance',
  templateUrl: './create-advance.component.html',
  styleUrls: ['./create-advance.component.css']
})
export class CreateAdvanceComponent implements OnInit {


  /* paramètres pour une nouvelle note de frais */
  closeResult = '';
  @Input() advanceName!: string;
  @Input() advanceDescription!: string;
  @Input() advanceAmount!: number;
  @Input() advanceMission!: number;

  /* paramètres pour la fenêtre d'alerte*/
  errorMessage = '';
  header = 'Echec création de note';
  level = 'danger';

  missions! : Mission[];
  userId!:number;

  constructor(private modalService: NgbModal, private apiService: ApiService, private sharedService : SharedService, private dialogRef : MatDialog){ }

  public createNewAdvance() : void {
    this.apiService.createNewAdvance(this.advanceAmount,this.advanceDescription, this.advanceName, this.advanceMission, this.userId).then(() =>{
      this.level = 'success';
      this.header = 'Succès création de la  ligne';
      this.errorMessage = 'Création de la ligne réalisée avec succès';

      this.dialogRef.open(AlertErrorComponent);
      this.sharedService.clickOnAlert.emit([this.level,this.header,this.errorMessage]);

    }).catch(exception => {
      this.errorMessage = exception.error;

      this.dialogRef.open(AlertErrorComponent);
      this.sharedService.clickOnAlert.emit([this.level,this.header,this.errorMessage]);

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
    this.apiService.getMissionList()
      .subscribe({
        next: (res) => {
          this.missions = res;
        },
        error: (e) => console.error(e)
      });

    this.apiService.getActualUser().subscribe({
      next: (res) => {
        this.userId = res;
      },
      error: (e) => console.error(e)
    });

  }

}
