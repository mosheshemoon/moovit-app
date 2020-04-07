import { Component, OnInit } from '@angular/core';
import { IDayTimes } from 'src/app/models/IDayTimes';
import { DeparturesTripService } from 'src/app/services/departures-trip.service';
import { element } from 'protractor';

@Component({
  selector: 'app-mini-trip-planner',
  templateUrl: './mini-trip-planner.component.html',
  styleUrls: ['./mini-trip-planner.component.css']
})
export class MiniTripPlannerComponent implements OnInit {
  allTrips: IDayTimes;
  selectedTime: Date;
  closestDeparturesMatches: Date[];

  constructor(private departureService: DeparturesTripService) { }

  ngOnInit() {
  }

  selectedDateAndTime(userTime: Date): void {
    this.selectedTime = userTime;
  }

  getDeparturePlan(): void {
    this.departureService.getTrips().subscribe((trips: IDayTimes[]) => {
      const dayTripTimes: string[] = this.extractWantedDayDepartures(trips);
      const dayTripTimesByMilliseconds: number[] = dayTripTimes.map(element =>
        this.getParsedTimeFromDateAndTime(element, this.selectedTime));
      const selectedTimeByMilliseconds: number = Date.parse(this.selectedTime.toString());

      this.closestDeparturesMatches = this.getTopFiveClosestMatches(dayTripTimesByMilliseconds,
        selectedTimeByMilliseconds)
    })
  }


  private getTopFiveClosestMatches(allTimes: number[], time: number): Date[] {
    const indexOfClosestMatch: number = allTimes.indexOf(this.getClosestMatch(allTimes, time));

    let closestResults: Date[] = [new Date(allTimes[indexOfClosestMatch - 2]),
    new Date(allTimes[indexOfClosestMatch - 1]), new Date(allTimes[indexOfClosestMatch]),
    new Date(allTimes[indexOfClosestMatch + 1]), new Date(allTimes[indexOfClosestMatch + 2])]

    return closestResults.filter((element: Date) => this.isLessThenHour(this.selectedTime, element))
  }

  private getClosestMatch(times: number[], time: number): number {
    return times.reduce((prev, curr) => {
      let closest = Math.abs(curr - time) < Math.abs(prev - time) ? curr : prev;

      return closest
    });
  }

  private extractWantedDayDepartures(departures: IDayTimes[]): string[] {
    const days: string[] = ['sunday', 'monday', 'tuesday', 'wednesday',
      'thursday', 'friday', 'saturday'];

    return departures.find(departures => departures[days[this.selectedTime.getDay()]])
      .departures;
  }

  private getParsedTimeFromDateAndTime(time: string, date: Date): number {
    const splitTime: string[] = time.split(":");
    const year: number = this.selectedTime.getFullYear();
    const month: number = this.selectedTime.getMonth();
    const day: number = this.selectedTime.getDate();

    const dateToParse: Date = new Date(year, month, day, parseInt(splitTime[0]),
      parseInt(splitTime[1]));

    return Date.parse(dateToParse.toString());
  }

  private isLessThenHour(firstDate: Date, secondDate: Date): Boolean {
    return (Math.abs((firstDate.getHours() * 60 + firstDate.getMinutes()) -
      (secondDate.getHours() * 60 + secondDate.getMinutes())) < 60)
  }
}
