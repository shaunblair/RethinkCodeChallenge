import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DataTablesModule } from 'angular-datatables';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { TableDataComponent } from './table-data/table-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FileUploadComponent,
    PatientEditComponent,
    TableDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
