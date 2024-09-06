import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], // Correct property name
})
export class NavbarComponent {
  @Output()
  op: EventEmitter<string> = new EventEmitter<string>();
  option: string = 'A';


  @Output()
  toggle1: EventEmitter<boolean> = new EventEmitter<boolean>();
  isLoggedIn = false;

  constructor() {
    
  }
  login() {
    this.isLoggedIn = !this.isLoggedIn; // Toggle login state
    this.toggle1.emit(this.isLoggedIn); // Emit the new login state
  }

  @Output()
  search: EventEmitter<string> = new EventEmitter<string>(); // Correct spelling

  @ViewChild('searchInput') searchInput!: ElementRef;

  searchedItem: string = '';

searchItemfunction(para: Event) {
    para.preventDefault();
    const inputValue = (this.searchInput.nativeElement as HTMLInputElement)
      .value;

    // Now, assign this input value to searchedItem
    this.searchedItem = inputValue;

  console.log('Search term:', this.searchedItem);
  
  }
}
