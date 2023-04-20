import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { TableDataComponent } from './table-data/table-data.component';

const routes: Routes = [
  {path: '', component: TableDataComponent},
  {path: 'edit/:id', component: PatientEditComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
