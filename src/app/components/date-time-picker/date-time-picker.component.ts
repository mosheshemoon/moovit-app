import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.css']
})
export class DateTimePickerComponent implements OnInit {
  departureInputTime: string;
  @Output() selected: EventEmitter<Date> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendTime(): void {
    const departureTime: Date = new Date(this.departureInputTime);
    this.selected.emit(departureTime);
  }
}
