import { Component, OnInit } from '@angular/core';
import { CallLog, CallLogObject } from '@ionic-native/call-log';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit {
  logs: any[];

  async ngOnInit() {
    const hasPermission = await CallLog.hasReadPermission();
    if (!hasPermission) {
      await CallLog.requestReadPermission();
    }
    const filters: CallLogObject[] = [];
    this.logs = await CallLog.getCallLog(filters);
    // console.log(this.logs);
  }
}
