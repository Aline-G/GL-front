import {Component, Input, OnInit, Output} from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ApiService} from "../../../services/api.service";
import {ExpenseBill} from "../../../model/expenseBill";
import {Mission} from "../../../model/mission";
import {AlertErrorComponent} from "../../../alert-error/alert-error.component";
import {SharedService} from "../../../services/dynamical-functions/SharedService";
import {MatDialog} from "@angular/material/dialog";
import {UploadFileService} from "../../../services/upload-file.service";
import { Observable } from 'rxjs';

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
  @Input() tva!: number;
  @Input() ht!: number;
  @Input() rate!: number;
  @Input() description!: string;
  @Input() supportingDocuments!: string;
  @Input() km!: number;
  @Input() rPlace!: string;
  @Input() hPlace!: string;
  @Input() vehicle!: string;
  @Input() fiscal_horse_power!: number;
  @Input() guestsName!: string;
  @Input() registrationNumber! :string
  @Input() conveyance! :string

  @Output() amount! :number


  closeResult = '';
  billId!: number;

  expenseBills!: ExpenseBill[];
  missions! : Mission[];

  //Paramètres pour le download de justificatifs
    progress = 0;
    message = '';
    fileInfos!: Observable<any>;

/* paramètres pour la génération de l'erreur*/
  selectedFiles!: FileList;
  currentFileUpload!: File;
  errorMessage = '';
  header = 'Echec création de ligne';
  level = 'danger';


  constructor(private modalService: NgbModal, private apiService: ApiService, private sharedService : SharedService, private dialogRef : MatDialog, private uploadService: UploadFileService ) {
    sharedService.clickOnPlusEvent.subscribe(
      (billId: number) => {
        console.log(billId);
        this.billId=billId;
      });
  }

  /*public getAmountMealExpense(): void{
    if(this.km != null && this.fiscal_horse_power != null) {
      this.amount = this.apiService.getAmountMealExpense(this.km, this.fiscal_horse_power);
    }
  }*/

  open(content: any) {
    this.modalService.open(content,
      {ariaLabelledBy: 'modal-basic-title'}).result.then(() => {this.closeResult = 'Closed with: ${result}';
    }, () => {
      this.closeResult =
        'Dismissed ${this.getDismissReason(reason)}';
    });
  }

  private static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return 'with: ${reason}';
    }
  }

  //Méthodes pour upload un justificatif

    selectFile(files : Event) {

      this.selectedFiles = (<HTMLInputElement>files.target).files!;

      if (this.selectedFiles && this.selectedFiles.length > 0) {
        this.currentFileUpload = this.selectedFiles[0];
        console.log(this.currentFileUpload.name);
        console.log(this.currentFileUpload.size);
        console.log(this.currentFileUpload.type);
      }
    }


    upload() {
      this.progress = 0;
      this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            if(event.total){
              const total: number = event.total;
              this.progress = Math.round(100 * event.loaded / total);
            }
          } else if (event instanceof HttpResponse) {
            alert('File Successfully Uploaded');
          }
        }
      );
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
          this.missions = res.filter(
            mission => mission.state=="IN_PROGRESS" || mission.state=="INCOMING")
        },
        error: (e) => console.error(e)
      });

  }


  public createNewLineBill() : void {

    if(this.category == 'FRAIS_KILOMETRIQUES'){
      if(this.fiscal_horse_power == 3){
        this.ttc = this.km * 0.456;
      }else if(this.fiscal_horse_power == 4){
        this.ttc = this.km * 0.523;
      }
      else if(this.fiscal_horse_power == 5){
        this.ttc = this.km * 0.548;
      }
      else if(this.fiscal_horse_power == 6){
        this.ttc = this.km * 0.574;
      }
      else if(this.fiscal_horse_power == 7){
        this.ttc = this.km * 0.601;
      }
      else{
        throw new Error("probleme dans create New line bill frais kilometriques lors du calcul du montant ");
      }
      console.log(this.ttc);
    }

    this.apiService.createNewLineBill(this.ttc,this.tva,this.date,this.description,this.lineMission,this.billId,
      this.country, this.category, this.km, this.rPlace, this.hPlace, this.vehicle, this.guestsName, this.fiscal_horse_power, this.registrationNumber, this.conveyance, this.paymentMethod).then(() =>{
      this.level = 'success';
      this.header = 'Succès création de la  ligne';
      this.errorMessage = 'Création de la ligne réalisée avec succès';

      this.dialogRef.open(AlertErrorComponent);
      this.sharedService.clickOnAlert.emit([this.level,this.header,this.errorMessage]);

      //recherchargement automatique de la page
      window.location.reload();
    }).catch(exception => {
      this.errorMessage = exception.error;

      this.dialogRef.open(AlertErrorComponent);
      this.sharedService.clickOnAlert.emit([this.level,this.header,this.errorMessage]);

    });

  }

}
