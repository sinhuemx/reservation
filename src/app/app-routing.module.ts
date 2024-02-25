import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReservationSummaryComponent } from './components/reservation-summary/reservation-summary.component';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';

const routes: Routes = [
  { path: '', component: CalendarComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'schedule-list', component: ScheduleListComponent },
  { path: 'reservation-form', component: ReservationFormComponent },
  { path: 'reservation-summary', component: ReservationSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
