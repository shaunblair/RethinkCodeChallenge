import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  patients: Patient[];

  constructor(private http: HttpClient) { }

  getTableData(): Observable<Patient[]> {
    return this.http.get<Patient[]>('http://localhost:5150/api/patient');
  }

  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>('http://localhost:5150/api/patient/' + id);
  }
}
