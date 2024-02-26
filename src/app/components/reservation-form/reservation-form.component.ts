import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup;
  submitted: boolean = false; // Para rastrear si se ha enviado el formulario

  constructor(private formBuilder: FormBuilder, private reservationService: ReservationService) {
    this.reservationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true; // Marcar como enviado
    if (this.reservationForm.valid) {
      const formData = this.reservationForm.value;
      this.reservationService.makeReservation(formData);
      this.reservationForm.reset(); // Restablecer el formulario al estado inicial
      this.submitted = false; // Reiniciar el estado de enviado
    } else {
      alert('Llena los campos correctamente.');
    }
  }
}
