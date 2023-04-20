import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from './services/data.service';
import { Patient } from './models/patient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
