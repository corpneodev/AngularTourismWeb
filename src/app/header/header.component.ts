import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  userIsLoggedIn = false;
  selectedOption: string = 'apple';

  handleLogin(isLoggedIn: boolean) {
    this.userIsLoggedIn = isLoggedIn;
    console.log('User login status:', this.userIsLoggedIn);
  }

 
}
