import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyComponent } from './survey/survey.component';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard] },
  { path: 'survey', component: SurveyComponent},
  { path: 'new-survey', component: NewSurveyComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
