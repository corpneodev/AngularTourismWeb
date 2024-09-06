import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loginFlag = false;
  constructor() {
    console.log('.......in UserService......');
  }
  login(uname: string, pass: string) {
    this.loginFlag = false;
    if (uname == 'admin' && pass == 'neoadmin123') this.loginFlag = true;
    return this.loginFlag;
  }
  logout() {
    this.loginFlag = false;
  }
  changePassword() {
    // backend
  }

  forgotPassword() {
    // backend
  }

  get logFlag() {
    return this.loginFlag;
  }
}
