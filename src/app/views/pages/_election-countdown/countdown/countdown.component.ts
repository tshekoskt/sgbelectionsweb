import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  month = "00";
  days = "12";
  hours = "09";
  minutes = "49"

  constructor() { }

  ngOnInit(): void {
  }

}
