import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  
  selectedFile: File = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }
  onFileSelected(event){
      this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const filedata = new FormData();
    filedata.append('csvFile', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:5150/api/patient', filedata)
    .subscribe(res => {
      console.log(res);
    });
  }
}