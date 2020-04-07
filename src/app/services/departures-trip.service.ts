import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeparturesTripService {

  constructor(private http: HttpClient) { }

  getTrips() {
    return this.http.get("/getData")
  }
}
