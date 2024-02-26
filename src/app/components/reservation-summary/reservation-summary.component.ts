import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservation-summary',
  templateUrl: './reservation-summary.component.html',
  styleUrls: ['./reservation-summary.component.scss']
})
export class ReservationSummaryComponent implements OnInit {
  lastReservation: any;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.reservationUpdated.subscribe(() => {
      this.loadLastReservation();
    });
    this.loadLastReservation();
  }

  loadLastReservation(): void {
    this.lastReservation = this.reservationService.getLastReservation();
  }
}
