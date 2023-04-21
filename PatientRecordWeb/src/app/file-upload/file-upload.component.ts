import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  
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
      console.log(res);
    });
  }
}
