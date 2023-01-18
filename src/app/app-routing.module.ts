import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { VisiteBriefjeComponent } from './visite-briefje/visite-briefje.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: OverviewComponent },
      { path: 'patient/:patientId', component: PatientDetailComponent },
      { path: 'patientslist', component: PatientListComponent },
      { path: 'visitebriefje/:patientId', component: VisiteBriefjeComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ])],

  exports: [RouterModule]
})
export class AppRoutingModule { }
