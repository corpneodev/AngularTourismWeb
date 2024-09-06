import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TourcrudService } from '../customclasses/Tourcrud.service';
import { Tour } from '../customclasses/Tour';
// import { CustomValidators } from '../customclasses/custom-validators'; 

@Component({
  selector: 'app-tours-form',
  templateUrl: './tours-form.component.html',
  styleUrl: './tours-form.component.css',
})
export class ToursFormComponent {
  tourForm: FormGroup;
  tour: any;
  currentRoute: string | undefined = '';
  constructor(
    private router: Router,
    public activeRoute: ActivatedRoute,
    private tourcrud: TourcrudService
  ) {
    this.currentRoute = this.activeRoute.snapshot.routeConfig?.path;
    const routerParameter = this.activeRoute.snapshot.paramMap.get('id');
    if (routerParameter != null) {
      let id = parseInt(routerParameter);
      this.getTour(id);
    }
    this.tourForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.minLength(1)]),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      available_seats: new FormControl('', [
        Validators.required,
        Validators.min(1),
      ]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      discounted_price: new FormControl('', [
        Validators.required,
        Validators.min(0),
      ]),
      // image_url: new FormControl('', [
      //   Validators.required,
      //   Validators.pattern('(https?|ftp)://[^s/$.?#].[^s]*'),
      // ]),
    });
  }
  get id() {
    return this.tourForm.get('id');
  }

  get title() {
    return this.tourForm.get('title');
  }
  get availableSeats() {
    return this.tourForm.get('available_seats');
  }
  get price() {
    return this.tourForm.get('price');
  }
  get discountedPrice() {
    return this.tourForm.get('discounted_price');
  }
  get imageUrl() {
    return this.tourForm.get('image_url');
  }

  submitTour() {
    if (this.tourForm.valid) {
      // const tourData = this.tourForm.value;
      // // Logic to handle the submission of the tour data, e.g., calling a service
      // console.log(tourData);
      this.collectData();
    }
  }
  collectData() {
    //console.log(this.employeeForm)
    this.tour = this.tourForm.value;
    // console.log(this.employee);
    if (this.currentRoute == 'add') {
      const obs = this.tourcrud.addEmployee(this.tour); // crud service
      obs.subscribe({
        next: (data) => {
          this.tour = data as Tour;
          window.alert(`Tour with id ${this.tour.id} added successfully...`);
          this.router.navigate(['/tours']);
        },
        error: (error) => console.log(error),
      });
    } else {
      const obs = this.tourcrud.updateTour(this.tour); // crud service
      obs.subscribe({
        next: (data) => {
          //console.log("update: ",data);
          window.alert(`Tour with id ${this.tour.id} updated successfully...`);
          this.router.navigate(['/tours']);
        },
        error: (error) => console.log(error),
      });
    }
  }
  // getTour(id: number) {
  //   const obs = this.tourcrud.getTourById(id);
  //   obs.subscribe({
  //     next: (data) => {
  //       this.tour = data as Tour;
  //       let jd = this.tour[0].id;
  //       // this.employee.joining_date = jd.slice(0, jd.length - 2);
  //       this.tourForm.patchValue(jd);
  //     },
  //     error: (error) => console.log(error),
  //   });
  // }
  getTour(id: number) {
    const obs = this.tourcrud.getTourById(id);
    obs.subscribe({
      next: (data) => {
        this.tour = data as Tour; // Cast the data to the expected type
        console.log('Received tour data:', this.tour); // Log the entire object

        // Assuming `this.tour` is an array and you're trying to get the first item
        if (this.tour && this.tour.length > 0) {
          const jd = this.tour[0].id; // Access the id (or other property)
          console.log('Tour ID:', jd);

          // Assuming `jd` is the value you want to patch into the form
          // Patch the form with the received data
          this.tourForm.patchValue({
            id: this.tour[0].id,
            title: this.tour[0].title,
            available_seats: this.tour[0].available_seats,
            discounted_price: this.tour[0].discounted_price,
            price: this.tour[0].price,
            // image: this.tour[0].image,
          });
        }
      },
      error: (error) => console.log('Error fetching tour:', error),
    });
  }

}
