import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  machineList: any = [];
  machine: any = {};

  constructor() {
    this.machineList = [{Id: 1, SerialNumber: 'Ab', Model: 'JQR', RunningHours: '16', LoadingHours: '12'}];
  }

  ngOnInit() {
  }

  addMachine() {
    console.log(this.machine);
  }

  reset() {
    this.machine = {};
  }
}