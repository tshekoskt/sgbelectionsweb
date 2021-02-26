import { Component, OnInit } from '@angular/core';
import { DateEnv, diffDates } from '@fullcalendar/core';
import * as moment from 'moment';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  month;
  days;
  hours;
  minutes;

  scheduleDate;
  schoolname;

  constructor() { }

  ngOnInit(): void {

    let currentDate = new Date();
    this.scheduleDate = new Date("2021-06-12");

    let duration = this.scheduleDate.getTime() - currentDate.getTime();
    let countdown = moment.duration(duration, 'seconds');
    this.month = countdown.months();
    this.days = countdown.days();
    this.hours = countdown.hours();
    this.minutes = countdown.minutes();
  }

}
