import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Mission} from "../../model/mission";
import {MatDialog} from "@angular/material/dialog";
import {SharedService} from "../../services/dynamical-functions/SharedService";
import {PopUpChangeStateComponent} from "./pop-up/pop-up-change-state/pop-up-change-state.component";
import {PopUpCreateMissionComponent} from "./pop-up/pop-up-create-mission/pop-up-create-mission.component";


@Component({
  selector: 'app-mission-management',
  templateUrl: './mission-management.component.html',
  styleUrls: ['./mission-management.component.css']
})
export class MissionManagementComponent implements OnInit {

  missionsList!: Mission[];


  constructor(private apiService: ApiService,private dialogRef : MatDialog, private sharedService : SharedService) {
  }

  //The state code is :
  /*
  * 0 : the current state is IN_PROGRESS
  * 1 : the current state is FINISHED
  * 2 : the current state is SUSPENDED
  * */
  public changeState(id: number, currentState : string) {
    this.dialogRef.open(PopUpChangeStateComponent);

    if(currentState =='IN_PROGRESS'){
      this.sharedService.clickOnChangeState.emit([id,0]);
    }
    if(currentState =='FINISHED'){
      this.sharedService.clickOnChangeState.emit([id,1]);
    }
    if(currentState =='SUSPENDED'){
      this.sharedService.clickOnChangeState.emit([id,2]);
    }

  }

  public createMission() {
    this.dialogRef.open(PopUpCreateMissionComponent);
  }

  ngOnInit(): void {
    this.apiService.getMissionList()
      .subscribe({
        next: (res) => {
          this.missionsList = res;
        },
        error: (e) => console.error(e)
      });
  }
 }
