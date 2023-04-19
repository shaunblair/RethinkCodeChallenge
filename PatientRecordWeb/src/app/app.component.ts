import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './models/patient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Patient Records';
  patients: Patient[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Patient[]>('http://localhost:5150/api/patient').subscribe({
      next: data => this.patients = data, 
      error: error => console.log(error),
      complete: () => {
        console.log('request complete');
      }
    })
  }
}
