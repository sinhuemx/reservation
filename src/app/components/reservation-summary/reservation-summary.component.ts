import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservation-summary',
  templateUrl: './reservation-summary.component.html',
  styleUrls: ['./reservation-summary.component.scss']
})
export class ReservationSummaryComponent implements OnInit {
  reservation: any;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.loadReservationDetails();
  }

  loadReservationDetails(): void {
    // Obtener los detalles de la última reserva realizada utilizando el servicio de reserva
    this.reservation = this.reservationService.getReservationDetails();
  }
}
