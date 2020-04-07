import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-departure-item',
  templateUrl: './departure-item.component.html',
  styleUrls: ['./departure-item.component.css']
})
export class DepartureItemComponent implements OnInit {
  @Input() departure: Date;
  
  constructor() { }

  ngOnInit() {
  }

}
