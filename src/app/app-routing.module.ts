import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyComponent } from './survey/survey.component';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guard/login.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard] },
  { path: 'survey/:id', component: SurveyComponent},
  { path: 'new-survey', component: NewSurveyComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent},
  { path: "", redirectTo: "dashboard", pathMatch: "full"}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
