import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from './services/data.service';
import { Patient } from './models/patient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dtops: DataTables.Settings = {};
  dtTrig: Subject<any> = new Subject<any>();
  patients: Patient[];

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    this.dtops = {
      pagingType: 'simple'
    }
    this.LoadTable();
  }

  LoadTable() {
    this.data.getTableData().subscribe(
      allData => {
        this.patients = allData;
        this.dtTrig.next(null);
        return this.patients;
      }
    )
  }

  EditPatient(patientId: string)
  {
    console.log(patientId);
  }
  
}
