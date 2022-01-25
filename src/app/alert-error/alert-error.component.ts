import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from "../services/dynamical-functions/SharedService";

@Component({
  selector: 'app-alert-error',
  templateUrl: './alert-error.component.html',
  styleUrls: ['./alert-error.component.css']
})
export class AlertErrorComponent implements OnInit {
  @Input() level = 'warning';
  @Input() header = 'Attention';
  @Input() message = '';
  constructor(private sharedService : SharedService) {
    this.sharedService.clickOnAlert.subscribe(
      (info: string[]) => {
        this.level = info[0];
        this.header = info[1];
        this.message = info[2];
      });
  }

  ngOnInit(): void {
  }

  close(): void {
    //recherche automatique de la page
    window.location.reload();
  }

}
