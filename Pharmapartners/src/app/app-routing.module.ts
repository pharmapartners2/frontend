import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { VisiteBriefjeComponent } from './visite-briefje/visite-briefje.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'overview', component: OverviewComponent },
      { path: 'patient/:patientId', component: PatientDetailComponent },
      { path: 'patientslist', component: PatientListComponent },
      { path: 'visitebrief/:patientId', component: VisiteBriefjeComponent }
    ])],

  exports: [RouterModule]
})
export class AppRoutingModule { }
