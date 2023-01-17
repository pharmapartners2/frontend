import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisiteBriefjeComponent } from './visite-briefje/visite-briefje.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { OverviewComponent } from './overview/overview.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AuthService} from "./services/auth.service";
import {TokenService} from "./services/token.service";
import {PatientService} from "./services/patient.service";
import {MedicationService} from "./services/medication.service";
import { AddJournaalFormComponent } from './add-journaal-form/add-journaal-form.component';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    VisiteBriefjeComponent,
    PatientListComponent,
    PatientDetailComponent,
    OverviewComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    AddJournaalFormComponent,
    EpisodeDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe, AuthService, TokenService, PatientService, MedicationService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
