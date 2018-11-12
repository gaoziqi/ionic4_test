import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactPage } from './contact.page';
import { Contacts } from '@ionic-native/contacts/ngx';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, RouterModule.forChild([{ path: '', component: ContactPage }])],
  declarations: [ContactPage],
  providers: [Contacts]
})
export class ContactPageModule {}
