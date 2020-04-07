/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeparturesTripService } from './departures-trip.service';

describe('Service: DeparturesTrip', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeparturesTripService]
    });
  });

  it('should ...', inject([DeparturesTripService], (service: DeparturesTripService) => {
    expect(service).toBeTruthy();
  }));
});
