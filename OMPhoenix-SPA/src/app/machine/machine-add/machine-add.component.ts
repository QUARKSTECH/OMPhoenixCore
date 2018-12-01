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
  material: any = {};
  machineList: any = [];
  baseurl  =  environment.apiUrl + 'machine/';
  constructor(private http: HttpClient, private alertify: AlertifyService, public authService: AuthService) {
    // this.jobCard = [{Month: 'Jan', Job: 'JB01', Date: '25-11-18'},
    // {Month: 'Feb', Job: 'JB02', Date: '18-11-18'},
    // {Month: 'Mar', Job: 'JB03', Date: '21-11-18'}];
    this.machine.serviceType = true;
  }

  ngOnInit() {
    this.getMachine();
  }

  addMachine() {
    this.http.post(this.baseurl, this.machine, httpOptions).subscribe(
      response => {
        const index = this.machineList.findIndex(item => item.id === response.id);
        if (index === -1) {
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
    this.http.get(this.baseurl, httpOptions).subscribe(
      response => {
        this.machineList = response;
        console.log(this.authService.decodedToken);
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  editMachine(machineobj) {
    this.machine = machineobj;
    const elmnt = document.getElementById('contentMachine');
    elmnt.scrollIntoView();
  }

  reset() {
    this.machine = {};
  }
}
