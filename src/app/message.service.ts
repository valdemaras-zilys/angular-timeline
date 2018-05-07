import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  errorMessages: string[] = [];
  successMessages: string[] = [];

  /**
   * Add error message
   * @param message
   */
  addError(message: string) {
    this.errorMessages.push(message);
  }

  /**
   * Add success messge
   * @param message
   */
  addSuccess(message: string) {
    this.successMessages.push(message);
  }
  /**
   * Reset message storage.
   */
  clear() {
    this.errorMessages = [];
    this.successMessages = [];
  }
}
