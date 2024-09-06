import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../customclasses/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  message = '';
  flag = false;

  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    public userService: UserService
  ) {}

  ngOnInit(): void {}

  redirctToSignup() {
    this.route.navigate(['../home'], { relativeTo: this.activeRoute });
  }

  collectData(loginForm: NgForm) {
    if (loginForm.valid) {
      this.flag = this.userService.login(
        loginForm.value.username,
        loginForm.value.password
      );
      if (this.flag) {
        window.alert('You are logged in successfully.....');
        this.route.navigate(['../home']);
      } else {
        this.message = 'Incorrect username or password';
      }
    } else {
      this.message = 'Please fill in all required fields correctly.';
    }
  }

  validateField(field: any) {
    if (!field.valid && field.touched) {
      this.message = `${
        field.name.charAt(0).toUpperCase() + field.name.slice(1)
      } is required and must be valid.`;
    } else {
      this.message = '';
    }
  }
}
