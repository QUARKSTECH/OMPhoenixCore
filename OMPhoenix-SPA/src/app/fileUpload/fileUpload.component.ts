import { Component, OnInit, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AuthService } from '../_service/auth.service';
import { AlertifyService } from '../_service/alertify.service';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileUpload.component.html',
  styleUrls: ['./fileUpload.component.css']
})
export class FileUploadComponent implements OnInit {

  modalRef: BsModalRef;
  uploadedJobCard: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService, private modalService: BsModalService) { }

  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseurl  =  environment.apiUrl;
  @Input() machineId: any;
  @Output() uploadedJobCardEvent = new EventEmitter();


  ngOnInit() {
    this.initializeUploader();
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseurl + 'machine/' + this.machineId + '/upload',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      // allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res = JSON.parse(response);
        this.uploadedJobCard = {
          id: res.id,
          url: res.url,
          createdDate: res.createdDate,
          machineId: res.machineId,
          publicId: res.publicId
        };
      }
      this.uploadedJobCardEvent.emit(this.uploadedJobCard);
      this.cancel();
      this.alertify.success('File uploaded successfully');
    };
  }

  cancel() {
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
