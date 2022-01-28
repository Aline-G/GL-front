import {Component, Input, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ApiService} from "../../../services/api.service";
import {ExpenseBill} from "../../../model/expenseBill";
import {Mission} from "../../../model/mission";
import {AlertErrorComponent} from "../../../alert-error/alert-error.component";
import {SharedService} from "../../../services/dynamical-functions/SharedService";
import {MatDialog} from "@angular/material/dialog";
import {catchError} from "rxjs";
import {ConfirmationDeleteComponent} from "../confirmation-delete/confirmation-delete.component";

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

  @Output() amount! :Promise<number | undefined>


  closeResult = '';
  billId!: number;

  expenseBills!: ExpenseBill[];
  missions! : Mission[];

/* paramètres pour la génération de l'erreur*/
  errorMessage = '';
  header = 'Echec création de ligne';
  level = 'danger';


  constructor(private modalService: NgbModal, private apiService: ApiService, private sharedService : SharedService, private dialogRef : MatDialog) {
    sharedService.clickOnPlusEvent.subscribe(
      (billId: number) => {
        this.billId=billId;
      });
  }

  public getAmountMealExpense(): void{
    if(this.km != null && this.fiscal_horse_power != null) {
      this.amount = this.apiService.getAmountMealExpense(this.km, this.fiscal_horse_power);
    }
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
