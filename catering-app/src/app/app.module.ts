import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';
import { FormComponent } from './components/pages/form/form.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AuthNavComponent } from './components/partials/auth-nav/auth-nav.component';
import { CateringPageComponent } from './components/pages/catering-page/catering-page.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { JobsComponent } from './components/pages/jobs/jobs.component';
import { LocationComponent } from './components/pages/location/location.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AuthNavComponent,
    CateringPageComponent,
    AboutComponent,
    FooterComponent,
    JobsComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbCollapseModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),

    MatButtonModule,
    MatCardModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
