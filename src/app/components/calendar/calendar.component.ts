import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  selectedDate: Date;
  availableDates: Date[] = [];

  constructor(private calendarService: CalendarService) {
    this.selectedDate = new Date(); // Inicialización en el constructor
  }

  ngOnInit(): void {
    // Obtener las fechas disponibles para septiembre
    this.calendarService.getAvailabilityForMonth(9).subscribe(dates => {
      this.availableDates = dates;
    });
  }

  // Verificar si una fecha está disponible
  isDateAvailable(date: Date): boolean {
    return this.availableDates.some(d => d.getTime() === date.getTime());
  }

  

  // Manejar la selección de fecha
  dateSelected(date: Date): void {
    this.selectedDate = date;
    console.log('Selected Date:', date);
  }
}
