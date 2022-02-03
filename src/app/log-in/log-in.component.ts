import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../services/api.service";
import {User} from "../model/user";
import {SharedService} from "../services/dynamical-functions/SharedService";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  @Input() mail!: string;
  userList! : User[];
  userId!:number;
  manager!:string;
  collaborator!:string;


  constructor(private router : Router,private apiService : ApiService, private sharedService: SharedService) {
    this.apiService.getUserList()
      .subscribe({
        next: (res) => {
          this.userList = res;
        },
        error: (e) => console.error(e)
      });
    this.manager = '/manager/home';
    this.collaborator = '/colaborator/home';


  }

  ngOnInit(): void {
  }

  logIn() {

    var user;
    for (user of this.userList) {
      if (user.mail == this.mail){
        this.userId = user.id;
      }
    }
    if(this.userId == undefined){
      console.log("there are no user with this mail")
    }

    this.apiService.isManager(this.userId)
      .subscribe({
        next: (res) => {
          if(res) {
            this.router.navigate([`${this.manager}`]);
            this.sharedService.userId = this.userId;
            console.log(this.userId);
            this.apiService.setActualUser(this.userId);
          }
          else {
            this.router.navigate([`${this.collaborator}`]);
            this.sharedService.userId = this.userId;
            this.apiService.setActualUser(this.userId);
          }
        },
        error: (e) => console.error(e)
      });

}

  goToColabortor(pageName: string) {
    this.router.navigate([`${pageName}`]);
    this.sharedService.userId = 1;
    this.apiService.setActualUser(1);
  }

  goToManager(pageName: string) {
    this.router.navigate([`${pageName}`]);
    this.sharedService.userId = 4;
    this.apiService.setActualUser(4);
  }

}
