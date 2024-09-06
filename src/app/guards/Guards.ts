import { inject } from '@angular/core';
import { UserService } from '../customclasses/user.service';
import { PopupService } from '../shared/popup.service';

export function authenticationGuard(): boolean {
  const userService = inject(UserService);
  const popupService = inject(PopupService); // Get an instance of PopupService

  if (userService.logFlag) {
    return true;
  } else {
    popupService.showPopup(
      'Authentication Required',
      'Please login first to access this route.'
    );
    return false;
  }
}
