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
    FormsModule
  ],
  providers: [
    SurveyService,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
