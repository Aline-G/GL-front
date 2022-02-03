import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

import {Advance} from "../../model/advance";
import {ConfirmationDeleteComponent} from "../pop-up/confirmation-delete/confirmation-delete.component";
import {SharedService} from "../../services/dynamical-functions/SharedService";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-home-advance',
  templateUrl: './home-advance.component.html',
  styleUrls: ['./home-advance.component.css']
})

export class HomeAdvanceComponent implements OnInit {
  advances!: Advance[];
  userId!: number;

  trashClicked(id : number) : void {
    /*this function allows to delete a bill in confirmation delete component,
   the first argument is the id of the bill to delete and the second one is 0 which is a code to say that it's a bill*/
    this.dialogRef.open(ConfirmationDeleteComponent);
    this.sharedService.advanceDelete.emit([id, 2]);
  }

  constructor(private apiService: ApiService, private sharedService : SharedService, private dialogRef : MatDialog){
  }

  ngOnInit(): void {

    this.apiService.getActualUser().subscribe({
      next: (res) => {
        this.userId = res;
      },
      error: (e) => console.error(e)
    });

    setTimeout(() =>
      this.apiService.getAdvanceListByUserId(this.userId)
        .subscribe({
          next: (res) => {
            this.advances = res;
            console.log(res);
            console.log(this.userId);
          },
          error: (e) => console.error(e)
        })
      , 700);



  }

}
