import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Patient } from '../models/patient';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit{
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

}
