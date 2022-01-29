import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-validation-navbar',
  templateUrl: './validation-navbar.component.html',
  styleUrls: ['./validation-navbar.component.css']
})
export class ValidationNavbarComponent implements OnInit {

  currentRoute = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
      // @ts-ignore
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.url.replace('/', '');
    });

  }

}
