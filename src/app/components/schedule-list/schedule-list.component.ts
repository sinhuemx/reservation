import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {
  schedules: any[] = [];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.loadSchedules();
  }

  loadSchedules(): void {
    // Obtener los horarios disponibles del servicio de reserva
    this.schedules = this.reservationService.getSchedules();
  }
}
