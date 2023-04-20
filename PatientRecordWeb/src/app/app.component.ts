import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './models/patient';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Patient Records';
  patients: Patient[];
  clickEventSubscription:Subscription;
  dtops: DataTables.Settings = {};
  dtTrig: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.dtops = {
      pagingType: 'simple'
    }
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
    this.dtTrig.next(null);
  }
}
