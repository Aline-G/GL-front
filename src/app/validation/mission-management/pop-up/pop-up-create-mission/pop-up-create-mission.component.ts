import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ApiService} from "../../../../services/api.service";
import {SharedService} from "../../../../services/dynamical-functions/SharedService";
import {Mission} from "../../../../model/mission";
import {MatDialog} from "@angular/material/dialog";
import {AlertErrorComponent} from "../../../../alert-error/alert-error.component";

@Component({
  selector: 'app-pop-up-create-mission',
  templateUrl: './pop-up-create-mission.component.html',
  styleUrls: ['./pop-up-create-mission.component.css']
})
export class PopUpCreateMissionComponent implements OnInit {


  /* paramètres pour une nouvelle note de frais */
  closeResult = '';
  @Input() missionName!: string;
  @Input() dateBeginning!: string;
  @Input() dateEnding!: string;
  @Input() referent!:string; //Users
  @Input() associated_collaborators!:string; //Users list
  @Input() description!: string;


  errorMessage = '';
  header = 'Echec création de note';
  level = 'danger';

  constructor(private modalService: NgbModal, private apiService: ApiService, private sharedService : SharedService, private dialogRef : MatDialog){}

  public createNewMission() : void {

    this.apiService.createNewMission(this.missionName,this.dateBeginning,this.dateEnding, this.description).then(() =>{
      this.level = 'success';
      this.header = 'Succès création de la mission';
      this.errorMessage = 'Création de mission réalisée avec succès';

      this.dialogRef.open(AlertErrorComponent);
      this.sharedService.clickOnAlert.emit([this.level,this.header,this.errorMessage]);

    }).catch(exception => {
      this.errorMessage = exception.error;
      this.dialogRef.open(AlertErrorComponent);
      this.sharedService.clickOnAlert.emit([this.level,this.header,this.errorMessage]);
    });
  }

  ngOnInit(): void {
  }



}
