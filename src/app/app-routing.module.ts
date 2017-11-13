import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyComponent } from './survey/survey.component';
import { NewSurveyComponent } from './new-survey/new-survey.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'survey', component: SurveyComponent},
  { path: 'new-survey', component: NewSurveyComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
