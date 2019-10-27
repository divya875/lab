import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  /*//this.date = new FormControl(new Date());
  //this.serializedDate = new FormControl((new Date()).toISOString());*/
}
