import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyService } from './service/surveys.service';
import { AppRoutingModule } from './app-routing.module';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { FormsModule }   from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { TableModule } from 'ngx-easy-table';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SurveyComponent,
    NewSurveyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    TableModule
  ],
  providers: [
    SurveyService,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
