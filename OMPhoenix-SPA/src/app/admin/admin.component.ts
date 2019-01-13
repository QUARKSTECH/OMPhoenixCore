import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_service/alertify.service';
import { environment } from 'src/environments/environment';

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
  jobCard: any = [];
  jobCardResponse: any = [];
  enquiries: any = [];

  constructor(private http: HttpClient, private alertify: AlertifyService, public authService: AuthService) {

  }

  ngOnInit() {
    // this.getAllMachines();
    this.getAllUsers();
    this.getEnquiries();
  }

  getAllMachines() {
    this.http.get(this.baseurl).subscribe(
      response => {
        this.machineList = response;
        this.machineList.forEach(element => {
          if (element.jobCards.length > 0 ) {
            element.jobCards.forEach(subElement => {
              this.jobCard.push(subElement);
            });
          }
        });
        // console.log(this.authService.decodedToken);
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  getAllUsers() {
    this.http.get(this.baseurl + 'getusers').subscribe(
      response => {
        this.userList = response;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  getUserMachines(userId) {
    const url = 'getusermachines?userId=' + userId;
    this.http.get(this.baseurl + url).subscribe(
      response => {
        this.machineList = response;
        if (this.machineList.length === 0) {
          this.alertify.warning('No machines available for this company');
          this.jobCard = [];
        }
        // this.machineList.forEach(element => {
        //   if (element.jobCards.length > 0 ) {
        //     element.jobCards.forEach(subElement => {
        //       this.jobCard.push(subElement);
        //     });
        //   }
        // });
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  getMachineJobCard(machineId) {
    this.jobCard = [];
    this.machineList.forEach(element => {
      if (element.jobCards.length > 0 && element.id === machineId) {
        element.jobCards.forEach(subElement => {
          this.jobCard.push(subElement);
        });
      }
    });
  }

  saveEditedMachine() {
    this.http.post(this.baseurl, this.machine).subscribe(
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
    this.http.post(this.baseurl + 'updateusers', this.user).subscribe(
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

  uploadedJobCard(jobObj) {
    this.jobCard.push(jobObj);
  }

  getEnquiries() {
    this.http.get(environment.apiUrl + 'enquiry').subscribe(
      response => {
        this.enquiries = response;
        if (response) {
          this.alertify.success('Enquiries loaded successfully');
        }
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
}
