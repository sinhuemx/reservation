import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReservationSummaryComponent } from './components/reservation-summary/reservation-summary.component';
import { PreviousReservationsComponent } from './components/previous-reservations/previous-reservations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ScheduleListComponent,
    ReservationFormComponent,
    ReservationSummaryComponent,
    PreviousReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
