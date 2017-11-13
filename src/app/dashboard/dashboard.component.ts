import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../service/surveys.service';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData : any;

  constructor(
    private surveyService: SurveyService,
  ){ }

  ngOnInit(): void {
    this.dashboardData = this.getDashboardData();
  }

  private getDashboardData() : any{
    return {
      currentSurvey : null
    };
  }

}
