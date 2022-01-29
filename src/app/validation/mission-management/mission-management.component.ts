import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Mission} from "../../model/mission";


@Component({
  selector: 'app-mission-management',
  templateUrl: './mission-management.component.html',
  styleUrls: ['./mission-management.component.css']
})
export class MissionManagementComponent implements OnInit {

  missionsList!: Mission[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    /*this.apiService.getUserList()
      .subscribe({
        next: (res) => {
          this.expenseBills = res;
        },
        error: (e) => console.error(e)
      });

     */
  }
 }
