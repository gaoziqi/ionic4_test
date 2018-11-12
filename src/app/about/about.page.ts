import { Component, OnInit } from '@angular/core';
import { CallLog, CallLogObject } from '@ionic-native/call-log/ngx';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit {
  logs: any[];
  constructor(private callLog: CallLog) {}
  async ngOnInit() {
    const hasPermission = await this.callLog.hasReadPermission();
    if (!hasPermission) {
      await this.callLog.requestReadPermission();
    }
    const filters: CallLogObject[] = [];
    this.logs = await this.callLog.getCallLog(filters);
    // console.log(this.logs);
  }
}
