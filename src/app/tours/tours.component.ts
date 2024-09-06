import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Tours } from '../Toursdata/Tours';
import { Tour } from '../customclasses/Tour';
import { TourcrudService } from '../customclasses/Tourcrud.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { BrowserModule } from '@angular/platform-browser';
import { SharedDataService } from '../shared/shared-data.service';
@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css',
})
export class ToursComponent {
  tourForm!: FormGroup;
  cardLinks = {
    btn: true,
    'btn-success': true,
    'm-2': true,
  };

  notFoundMessage = '';
  cards: Tour[] = [];
  tour: any;
  constructor(
    private tourcrud: TourcrudService,
    private sharedService: SharedDataService
  ) {
    this.getEmployees();
  }
  // Define the arrayBufferToBase64 method here
  arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  getEmployees() {
    const obs = this.tourcrud.getAllEmployees();
    obs.subscribe({
      next: (data) => {
        this.cards = data as Tour[];

        // Convert the image blobs to Base64 strings for each card
        this.cards.forEach((card) => {
          if (card.image && typeof card.image === 'object' && card.image.data) {
            // If image is a blob and has data, convert it to a Base64 string
            card.imageUrl = `data:${
              card.image.type
            };base64,${this.arrayBufferToBase64(card.image.data)}`;
          } else if (typeof card.image === 'string') {
            // If image is already a URL string, use it directly
            card.imageUrl = card.image;
          } else {
            // If image is null or undefined, use a fallback image URL
            card.imageUrl = 'Fort.jpg'; // Replace with your actual fallback image URL
          }
        });
      },
      error: (error) => console.log(error),
    });
  }

  deleteEmployee(_id: number) {
    // id:string
    //console.log("in parent function", _id);

    const answer = window.confirm('Do you really want to delete?');
    if (answer) {
      const obs = this.tourcrud.deleteEmployeeById(_id);
      obs.subscribe({
        next: (data) => {
          window.alert('Tour Deleted Successfully....');
          this.getEmployees();
        },
        error: (error) => console.log(error),
      });
    }
  }

  getTour(_id: number) {
    const obs = this.tourcrud.getTourById(_id);
    obs.subscribe({
      next: (data) => {
        this.tour = data as Tour;
        // let jd = this.employee.joining_date;
        // this.employee.joining_date = jd.slice(0, jd.length - 2);
        this.tourForm.patchValue(this.tour);
      },
      error: (error) => console.log(error),
    });
  }
  getTourByTitle(_title:string) {
    const obs = this.tourcrud.getTourByTitle(_title);
    obs.subscribe({
      next: (data) => {
        this.tour = data as Tour;
        // let jd = this.employee.joining_date;
        // this.employee.joining_date = jd.slice(0, jd.length - 2);
        this.tourForm.patchValue(this.tour);
      },
      error: (error) => console.log(error),
    });
  }
}
