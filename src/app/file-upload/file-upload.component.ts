import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourcrudService } from '../customclasses/Tourcrud.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css',
})
export class FileUploadComponent {
  _id = 0;
  tour_pic: any;
  uploadError = '';
  constructor(
    public activeRoute: ActivatedRoute,
    public tourcrud: TourcrudService
  ) {
    let routeParam = activeRoute.snapshot.paramMap.get('id');
    if (routeParam != null) this._id = parseInt(routeParam);
    //console.log(this._id);
  }
  setFile(event: any) {
    // console.log(event.target.files[0]);
    this.tour_pic = event.target.files[0];
    this.uploadError = '';
  }

  fileUp() {
    // service function fileUpload : id, file
    if (this.tour_pic == undefined)
      this.uploadError = 'Please select the file to upload';
    else {
      const obs = this.tourcrud.fileUpload(this._id, this.tour_pic);
     obs.subscribe({
        next: (data) => window.alert('Image uploaded successfully...'),
        error: (er) => console.log(er),
      });
    }
  }
}
