import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-previous-reservations',
  templateUrl: './previous-reservations.component.html',
  styleUrls: ['./previous-reservations.component.scss']
})
export class PreviousReservationsComponent implements OnInit {
  previousReservations: any[] = [];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.loadPreviousReservations();
  }

  loadPreviousReservations(): void {
    this.previousReservations = this.reservationService.getPreviousReservations();
  }
}
