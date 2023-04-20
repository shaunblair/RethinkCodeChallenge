import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  patients: Patient[];

  constructor(private http: HttpClient) { }

  getTableData() {
    return this.http.get<Patient[]>('http://localhost:5150/api/patient');
  }
}
