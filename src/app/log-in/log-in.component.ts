import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../services/api.service";
import {User} from "../model/user";

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


  constructor(private router : Router,private apiService : ApiService) {
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
          }
          else {
            this.router.navigate([`${this.collaborator}`]);
          }
        },
        error: (e) => console.error(e)
      });
}

  goTo(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }


}
