import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine-add',
  templateUrl: './machine-add.component.html',
  styleUrls: ['./machine-add.component.css']
})
export class MachineAddComponent implements OnInit {

  jobCard: any = [];
  machine: any = {};
  material: any = {};
  machineList: any = [];
  constructor() {
    this.jobCard = [{Month: 'Jan', Job: 'JB01', Date: '25-11-18'},
    {Month: 'Feb', Job: 'JB02', Date: '18-11-18'},
    {Month: 'Mar', Job: 'JB03', Date: '21-11-18'}];
    this.machine.serviceType = true;
    // tslint:disable-next-line:max-line-length
    this.machineList = [{Id: 1, SerialNumber: 'Ab', Make: 'India', Model: 'JQR', RunningHours: '16', LoadingHours: '12', LastServiceDate: '12-11-2018', LastServiceHours: '22:10'}];
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
