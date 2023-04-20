import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Patient } from '../models/patient';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit{
  patient: Patient;
  patientForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    birthday: new FormControl(''),
    gender: new FormControl('')
  });

  constructor(private data: DataService, private route: ActivatedRoute, private fb: FormBuilder){}
  
  ngOnInit(): void {
    this.LoadPatient();
  }

  LoadPatient() {
    this.data.getPatientById(Number(this.route.snapshot.paramMap.get('id'))).subscribe(p => {
        this.patientForm = this.fb.group({
          firstName: p.firstName,
          lastName: p.lastName,
          birthday: formatDate(p.birthday, 'yyy-MM-dd', 'en'),
          gender: p.gender.shortGender
        }); 
      }
    )
  }

  UpdatePatient() {
    const p: Patient = {
      id: this.patientForm.value.id,
      firstName: this.patientForm.value.firstName,
      lastName: this.patientForm.value.lastName,
      birthday: this.patientForm.value.birthday,
      gender: this.patientForm.value.gender
    }
    this.data.updatePatient(p);
  }
}
