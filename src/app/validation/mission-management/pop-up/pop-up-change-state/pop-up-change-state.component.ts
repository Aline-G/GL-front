import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../../services/dynamical-functions/SharedService";
import {ApiService} from "../../../../services/api.service";


@Component({
  selector: 'app-pop-up-change-state',
  templateUrl: './pop-up-change-state.component.html',
  styleUrls: ['./pop-up-change-state.component.css']
})
export class PopUpChangeStateComponent implements OnInit {


  id!: number
  currentState!: number
  private newState!: string;

  public changeState(getNewState : number) : void{

    if(getNewState==0){
      this.newState = "IN_PROGRESS";
    }
    if(getNewState==1){
      this.newState = "IN_PROGRESS";
    }
    if(getNewState==2){
      this.newState = "IN_PROGRESS";
    }

    this.apiService.changeState(this.id,this.newState);

  }

  constructor( private sharedService : SharedService , private apiService : ApiService) {
    this.sharedService.clickOnChangeState
      .subscribe({
          next: (listn: number[]) => {
            this.id = listn[0]
            this.currentState = listn[1]
          }
        }
      );
  }

  ngOnInit(): void {
  }


}
