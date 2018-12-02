import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_service/alertify.service';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  machineList: any = [];
  machine: any = {};
  baseurl  =  environment.apiUrl + 'admin/';
  isEdit: any = false;
  userList: any = [];
  user: any = {};
  isEditUser: any = false;
  constructor(private http: HttpClient, private alertify: AlertifyService, public authService: AuthService) {

  }

  ngOnInit() {
    this.getAllMachines();
    this.getAllUsers();
  }

  getAllMachines() {
    this.http.get(this.baseurl, httpOptions).subscribe(
      response => {
        this.machineList = response;
        // console.log(this.authService.decodedToken);
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  getAllUsers() {
    this.http.get(this.baseurl + 'getusers', httpOptions).subscribe(
      response => {
        this.userList = response;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  saveEditedMachine() {
    this.http.post(this.baseurl, this.machine, httpOptions).subscribe(
      response => {
        console.log(this.machine);
        this.reset();
        this.alertify.success('Machine updated successfully');
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  saveEditedUser() {
    this.http.post(this.baseurl + 'updateusers', this.user, httpOptions).subscribe(
      response => {
        console.log(this.user);
        this.reset();
        this.alertify.success('Company updated successfully');
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  editMachine(machineobj) {
    this.isEdit = true;
    this.machine = machineobj;
    const elmnt = document.getElementById('adminmachineAdd');
    elmnt.scrollIntoView();
  }

  editUser(userObj) {
    this.isEditUser = true;
    this.user = userObj;
    const elmnt = document.getElementById('adminUserAdd');
    elmnt.scrollIntoView();
  }

  reset() {
    this.machine = {};
    this.user = {};
    this.isEdit = false;
    this.isEditUser = false;
  }
}
