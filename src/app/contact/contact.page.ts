import { Component, OnInit } from '@angular/core';
import { Contact, Contacts, ContactFindOptions, ContactFieldType } from '@ionic-native/contacts/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage implements OnInit {
  contacts: Contact[];

  constructor(private cs: Contacts) {}

  async ngOnInit() {
    const options = new ContactFindOptions();
    options.multiple = true;
    const fields: ContactFieldType[] = ['*'];

    this.contacts = await this.cs.find(fields, options);
    // console.log(this.contacts);
  }
}
