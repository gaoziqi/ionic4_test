import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';
import { CallLog } from '@ionic-native/call-log/ngx';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, RouterModule.forChild([{ path: '', component: AboutPage }])],
  declarations: [AboutPage],
  providers: [CallLog]
})
export class AboutPageModule {}
