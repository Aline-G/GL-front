import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit{
  title!: string;
  description!: string
  createdDate!: Date;

  ngOnInit() {
    this.title = 'Home-screen'
    this.description = '';
    this.createdDate = new Date()
  }


}
