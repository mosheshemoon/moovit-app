import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-departure-list',
  templateUrl: './departure-list.component.html',
  styleUrls: ['./departure-list.component.css']
})
export class DepartureListComponent implements OnInit {
  @Input() departures: Date[];

  constructor() { }

  ngOnInit() {
  }

}
