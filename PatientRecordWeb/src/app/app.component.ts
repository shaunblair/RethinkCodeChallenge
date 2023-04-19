import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './models/patient';
import { Subscription } from 'rxjs';
import { EventListenerServiceService } from './services/event-listener-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Patient Records';
  patients: Patient[];
  clickEventSubscription:Subscription;

  constructor(private http: HttpClient, private eventListenerService:EventListenerServiceService) {
    this.clickEventSubscription = this.eventListenerService.getClickEvent().subscribe(() => {
      this.getTableData();
    });
  }

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    this.http.get<Patient[]>('http://localhost:5150/api/patient').subscribe({
      next: data => this.patients = data, 
      error: error => console.log(error),
      complete: () => {
        console.log('request complete');
      }
    });
  }
}
