import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Employee } from '../customclasses/employee';
import { Tour } from './Tour';
// import { file } from '@rxweb/reactive-form-validators';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class TourcrudService {
  url1 = 'http://localhost:6000/employees';
  url2 = 'http://localhost:5000/tours';
  constructor(private http: HttpClient) {}

  addEmployee(tour: Tour) {
    const obs = this.http.post(`${this.url2}/add`, tour); // backend // secure : url, body
    return obs;
  }
  updateTour(tour: Tour) {
    //const obs=this.http.put(`${this.url1}/${employee._id}`,employee)
    const obs = this.http.put(`${this.url2}/update/${tour.id}`, tour); // backend // secure : url, body
    return obs;
  }
  getAllEmployees() {
    //this.http.get(this.url1) for jsonserver as a backend
    const obs = this.http.get(`${this.url2}/getall`);
    return obs;
  }
  getTourById(_id: number) {
    //  const obs=this.http.get(`${this.url1}/${_id}`) //for jsonserver as a backend
    const obs = this.http.get(`${this.url2}/get/${_id}`);
    return obs;
  }
  deleteEmployeeById(_id: number) {
    // const obs=this.http.delete(`${this.url1}/${_id}`)
    const obs = this.http.delete(`${this.url2}/delete/${_id}`);
    return obs;
  }
  fileUpload(_id: number, tour_pic: any) {
    let formData = new FormData();
    formData.append('tour_pic', tour_pic);
    const obs = this.http.put(`${this.url2}/upload/${_id}`, formData);
    return obs;
  }
  getTourByTitle(_title: string) {
    //  const obs=this.http.get(`${this.url1}/${_id}`) //for jsonserver as a backend
    const obs = this.http.get(`${this.url2}/gettitle/${_title}`);
    return obs;
  }
}
