import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert-error',
  templateUrl: './alert-error.component.html',
  styleUrls: ['./alert-error.component.css']
})
export class AlertErrorComponent implements OnInit {
  @Input() level = 'warning';
  @Input() header = 'Attention';
  @Input() message = '';
  constructor() { }

  ngOnInit(): void {
  }

}
