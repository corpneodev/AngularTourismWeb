import { Component } from '@angular/core';
import { PopupService } from './shared/popup.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TourismWeb';
  inputText: string = '';
  popupMessage: { title: string; body: string } | null = null;

  constructor(private popupService: PopupService) {
    this.popupService.message$.subscribe((message) => {
      this.popupMessage = message;
    });
  }

  addValue(input: HTMLInputElement) {
    this.inputText = input.value;
  }
  closePopup() {
    this.popupService.hidePopup();
  }
}
