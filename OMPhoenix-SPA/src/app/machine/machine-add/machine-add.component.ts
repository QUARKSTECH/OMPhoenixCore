import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine-add',
  templateUrl: './machine-add.component.html',
  styleUrls: ['./machine-add.component.css']
})
export class MachineAddComponent implements OnInit {

  jobCard: any = [];
  machine: any = {};
  company: any = {};
  constructor() {
    this.jobCard = [{Month: 'Jan', Job: 'JB01', Date: '25-11-18'},
    {Month: 'Feb', Job: 'JB02', Date: '18-11-18'},
    {Month: 'Mar', Job: 'JB03', Date: '21-11-18'}];
    this.machine.serviceType = true;
  }

  ngOnInit() {
  }

  addMachine() {
    console.log(this.company);
  }

  reset() {
    this.company = {};
  }
}
