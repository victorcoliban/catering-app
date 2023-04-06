import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { FormComponent } from './components/pages/form/form.component';

import { AuthGuard } from './services/auth.guard';
import { CateringPageComponent } from './components/pages/catering-page/catering-page.component';
import { AboutComponent } from './components/pages/about/about.component';
import { JobsComponent } from './components/pages/jobs/jobs.component';
import { LocationComponent } from './components/pages/location/location.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'catering-page', component: CateringPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'form', component: FormComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'location', component: LocationComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
