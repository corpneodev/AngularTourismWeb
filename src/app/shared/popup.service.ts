import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  // BehaviorSubject to hold the current popup message
  private messageSource = new BehaviorSubject<{
    title: string;
    body: string;
  } | null>(null);

  // Observable that components can subscribe to for the popup message
  message$ = this.messageSource.asObservable();

  // Method to show the popup with a title and body
  showPopup(title: string, body: string) {
    this.messageSource.next({ title, body });
  }

  // Method to hide the popup
  hidePopup() {
    this.messageSource.next(null);
  }
}
