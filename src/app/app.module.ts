import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyService,  } from './service/surveys.service';
import { AppRoutingModule } from './app-routing.module';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';
import { LoginGuard } from './guard/login.guard';
import { MenuComponent } from './menu/menu.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {HttpClientModule} from '@angular/common/http';
import { SurveyIdsComponent } from './survey-ids/survey-ids.component';
import { SurveyCompletedComponent } from './survey-completed/survey-completed.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SurveyComponent,
    NewSurveyComponent,
    LoginComponent,
    MenuComponent,
    SurveyIdsComponent,
    SurveyCompletedComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    Ng2SmartTableModule
  ],
  providers: [
    SurveyService,
    LoginService,
    LoginGuard,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
