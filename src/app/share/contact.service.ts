/// <reference path="../../../plugins/cordova-plugin-contacts/types/index.d.ts"/>
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  onSuccess = new Subject<Contact[]>();
  onError = new Subject<ContactError>();
  constructor() {}

  find(fields: string[], options?: ContactFindOptions): void {
    navigator.contacts.find(
      fields,
      (contacts: Contact[]) => {
        this.onSuccess.next(contacts);
      },
      (error: ContactError) => {
        this.onError.next(error);
      },
      options
    );
  }
}
