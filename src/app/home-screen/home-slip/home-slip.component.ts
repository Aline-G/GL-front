import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-home-slip',
  templateUrl: './home-slip.component.html',
  styleUrls: ['./home-slip.component.css']
})
export class HomeSlipComponent implements OnInit {
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
