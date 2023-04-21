import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { Patient } from '../models/patient';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Output() patientsUploaded = new EventEmitter<Patient[]>();
  selectedFile: File = null;

  constructor(private http: HttpClient, private data: DataService) {}

  ngOnInit(): void {
  }
  onFileSelected(event){
      this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const filedata = new FormData();
    filedata.append('csvFile', this.selectedFile, this.selectedFile.name);
    this.data.uploadFile(filedata).subscribe(res => {
      this.patientsUploaded.emit(res);
    });
  }
}
