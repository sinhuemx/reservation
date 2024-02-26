import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: any[] = [];
  private lastReservation: any;
   reservationUpdated: EventEmitter<any> = new EventEmitter<any>();
   private schedules: any[] = [
    { time: '08:00 AM', available: true },
    { time: '10:00 AM', available: false },
    { time: '12:00 PM', available: true },
    { time: '02:00 PM', available: true },
    { time: '04:00 PM', available: false }
  ];

  constructor() {}

  getDeliverySchedules() {
    // Implementa la lógica para obtener los horarios de entrega
    return [];
  }

  getSchedules(): any[] {
    // Implementa la lógica para obtener los horarios generales
    return this.schedules;
  }

  submitReservation(userInfo: any): void {
    // Implementa la lógica para enviar la reserva al backend o almacenarla localmente
    this.reservations.push(userInfo);
  }

  getReservationDetails(): any {
    // Implementa la lógica para obtener los detalles de la última reserva realizada
    return this.reservations[this.reservations.length - 1];
  }

  getPreviousReservations(): any[] {
    // Implementa la lógica para obtener las reservas anteriores del usuario
    return this.reservations;
  }

  makeReservation(formData: any): void {
    this.reservations.push(formData);
    this.lastReservation = formData;
    this.reservationUpdated.emit(); // Emitir un evento cuando se realiza una nueva reserva
  }

  getLastReservation(): any {
    return this.lastReservation;
  }
}
