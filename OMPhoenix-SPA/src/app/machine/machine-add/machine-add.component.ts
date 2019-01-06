import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { AuthService } from 'src/app/_service/auth.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};
@Component({
  selector: 'app-machine-add',
  templateUrl: './machine-add.component.html',
  styleUrls: ['./machine-add.component.css']
})
export class MachineAddComponent implements OnInit {

  jobCard: any = [];
  machine: any = {};
  requestModel: any = {};
  machineList: any = [];
  requestEmail: any = {};
  baseurl  =  environment.apiUrl + 'machine/';
  userId: any;
  isEditMode: boolean;

  constructor(private http: HttpClient, private alertify: AlertifyService, public authService: AuthService) {
    // this.jobCard = [{Month: 'Jan', Job: 'JB01', Date: '25-11-18'},
    // {Month: 'Feb', Job: 'JB02', Date: '18-11-18'},
    // {Month: 'Mar', Job: 'JB03', Date: '21-11-18'}];
     this.requestModel.serviceType = true;
     this.userId = this.authService.decodedToken.nameid;
     this.isEditMode = false;
  }

  ngOnInit() {
    this.getMachine();
  }

  addMachine() {
    this.machine.userId = this.userId;
    this.http.post(this.baseurl, this.machine, httpOptions).subscribe(
      response => {
        if (!this.machine.id) {
          this.machineList.push(response);
          this.alertify.success('Machine added successfully');
        }
        this.alertify.success('Machine updated successfully');
        this.machine = {};
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  getMachine() {
    const url = 'getusermachines?userId=' + this.userId;
    this.http.get(this.baseurl + url, httpOptions).subscribe(
      response => {
        this.machineList = response;
        this.machineList.forEach(element => {
          if (element.jobCards.length > 0 ) {
            element.jobCards.forEach(subElement => {
              this.jobCard.push(subElement);
            });
          }
        });
        console.log(this.authService.decodedToken);
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  editMachine(machineobj) {
    this.isEditMode = true;
    this.machine = machineobj;
    const elmnt = document.getElementById('contentMachine');
    elmnt.scrollIntoView();
  }

  reset() {
    this.machine = {};
    this.isEditMode = false;
  }

  request(type) {
    this.requestModel.requestType = type;
    if (type === 'ServiceRequest') {
      if (this.requestModel.serviceType) {
        this.requestModel.serviceCategory = 'General Service';
      } else {
        this.requestModel.serviceCategory = 'Breakdown Service';
      }
    }
    this.http.post(this.baseurl + 'request/', this.requestModel, httpOptions).subscribe(
      response => {
        if (response) {
          this.alertify.success('Request mail has been sent successfully');
          this.requestModel.serviceType = true;
        }
      },
      error => {
        this.alertify.error(error);
        this.requestModel.serviceType = true;
      }
    );
    this.requestModel = {};
  }
}
