import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';
import { Observable } from 'rxjs';
import { Gender } from '../models/gender';

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

  getGenderOptions(): Observable<Gender[]> {
    return this.http.get<Gender[]>('http://localhost:5150/api/patient/GenderOptions')
  }

  updatePatient(p: Patient): Observable<Patient> {
    return this.http.put<Patient>('http://localhost:5150/api/patient', p);
  }

  uploadFile(fData: FormData): Observable<any> {
    return this.http.post('http://localhost:5150/api/patient', fData);
  }
}
