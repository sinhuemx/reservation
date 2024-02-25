import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: any[] = [];

  constructor() {}

  getDeliverySchedules() {
    // Implementa la lógica para obtener los horarios de entrega
    return [];
  }

  getSchedules(): any[] {
    // Implementa la lógica para obtener los horarios generales
    return [];
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
    // Agrega la nueva reserva al arreglo de reservas
    this.reservations.push(formData);
 
  }
}
