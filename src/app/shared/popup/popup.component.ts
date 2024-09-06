import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  @Input() messageTitle: string = '';
  @Input() messageBody: string = '';
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit(); // Emit an event to close the popup
  }
}
