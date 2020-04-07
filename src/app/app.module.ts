import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MiniTripPlannerComponent } from './containers/mini-trip-planner/mini-trip-planner.component';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';
import { DepartureItemComponent } from './components/departure-item/departure-item.component';
import { DepartureListComponent } from './components/departure-list/departure-list.component';

@NgModule({
  declarations: [
    DepartureItemComponent,
    DepartureListComponent,
    AppComponent,
    MiniTripPlannerComponent,
    DateTimePickerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
