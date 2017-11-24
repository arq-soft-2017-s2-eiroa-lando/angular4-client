import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../service/surveys.service';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData : any;
  pieChartLabels : string[];
  pieChartData : number[];
  pieChartType : string;

  constructor(
    private surveyService: SurveyService,
  ){ }

  ngOnInit(): void {
    this.dashboardData = this.surveyService.getSurveyStatistics();
    this.pieChartLabels = ['Total de almunos', 'Encuestas completadas'];
    this.pieChartData = [this.dashboardData.totalSurveys, this.dashboardData.surveysCompleted];
    this.pieChartType = "pie";
  }



  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


}
