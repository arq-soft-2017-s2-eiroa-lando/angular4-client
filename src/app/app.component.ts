import { Component, OnInit } from '@angular/core';
import { SurveyService } from './service/surveys.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  survey: any;

  constructor(
    private surveyService: SurveyService
  ){ }

  ngOnInit(): void {
    // this.surveyService.getSurvey().then(s=> this.survey = s);
    this.survey = this.surveyService.getSurvey();
  }

  submitSurvey(): void {
    console.log("Survey submitted")
  }
}
