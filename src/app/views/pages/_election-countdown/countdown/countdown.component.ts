import { Component, OnInit } from '@angular/core';
import { ElectionsService } from '../../_SERVICE/elections.service';
import * as moment from 'moment';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  month = 0;
  days = 0;
  hours = 0;
  minutes = 0;

  schudule;
  scheduleDate;
  schoolname;

  constructor(private schedulecNomination: ElectionsService) { }

  ngOnInit(): void {

    let currentDate = new Date();
    let emisCode = localStorage.getItem('EmisCode');

    this.schedulecNomination.getScheduledNominationByEmisCode(emisCode, moment(currentDate).format("YYYY-MM-DD")).subscribe(res => {
      this.schudule = res;
      this.scheduleDate = new Date(this.schudule.scheduleDate);

      let duration = this.scheduleDate.getTime() - currentDate.getTime();
      let countdown = moment.duration(duration, 'seconds');

      this.month = countdown.months();
      this.days = countdown.days();
      this.hours = countdown.hours();
      this.minutes = countdown.minutes();

    })

  }

}
