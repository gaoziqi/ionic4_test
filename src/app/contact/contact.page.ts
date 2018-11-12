import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../share/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  private success: Subscription;
  private error: Subscription;
  constructor(private cs: ContactService, private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    this.success = this.cs.onSuccess.subscribe((contacts: Contact[]) => {
      console.log(contacts);
      this.contacts = contacts;
      // 手动更新
      this.cdr.markForCheck();
      this.cdr.detectChanges();
    });
    this.error = this.cs.onError.subscribe((error: ContactError) => {
      console.log(error);
    });
    const options = new ContactFindOptions();
    options.multiple = true;
    const fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
    this.cs.find(fields, options);
  }
  ngOnDestroy() {
    this.success.unsubscribe();
    this.error.unsubscribe();
  }
  onDeviceReady(self: ContactPage, e: Event) {}
}
