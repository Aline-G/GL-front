import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ApiService} from "../../../services/api.service";
import {SharedService} from "../../../services/dynamical-functions/SharedService";
import {Mission} from "../../../model/mission";

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

  missions! : Mission[];

  constructor(private modalService: NgbModal, private apiService: ApiService, private sharedService : SharedService){
    sharedService.clickOnAddBill.subscribe(
      (openModal: boolean) => {
        //TODO
      });
  }

  public createNewAdvance() : void {
    this.apiService.createNewAdvance(this.advanceAmount,this.advanceDescription, this.advanceName, this.advanceMission);

    //recherche automatique de la page
    window.location.reload();
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
    this.apiService.getMissionList()
      .subscribe({
        next: (res) => {
          this.missions = res;
        },
        error: (e) => console.error(e)
      });
  }

}
