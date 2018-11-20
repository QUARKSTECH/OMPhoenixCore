import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  values: any;
  // location: number;
  // service: number;
  model: any = {};
  constructor() {
    this.values = [{Id: 1, Value: 'USA'}, {Id: 2, Value: 'Canada'}, {Id: 3, Value: 'Uk'}];
    this.model.location = 1;
    this.model.service = 3;
  }

  ngOnInit() {
  }

  createAppointment() {
    console.log(this.model);
  }

}
