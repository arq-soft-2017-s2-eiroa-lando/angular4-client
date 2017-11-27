import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../service/surveys.service';
import { ConfigService } from './configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ConfigService],
})
export class DashboardComponent implements OnInit {
  dashboardData : any;
  pieChartLabels : string[];
  pieChartData : number[];
  pieChartType : string;
  completionPercentage : number;

  columns = [
    { key: 'subject', title: 'Materia' },
    { key: 'name', title: 'Comision' },
    { key: 'schedule', title: 'Horarios' },
    { key: 'enrolled', title: 'Inscriptos' }
  ];
  data = [];
  configuration;

  constructor(
    private surveyService: SurveyService,
  ){ }

  ngOnInit(): void {
    this.dashboardData = this.surveyService.getSurveyStatistics();
    this.pieChartLabels = ['No completadas', 'Completadas'];
    this.pieChartData = [this.dashboardData.totalSurveys - this.dashboardData.surveysCompleted, this.dashboardData.surveysCompleted];
    this.pieChartType = "pie";
    this.dashboardData.classes.sort( (s1,s2) => s1.enrolled - s2.enrolled );
    this.configuration = ConfigService.config;
    this.data = this.dashboardData.classes;
    this.completionPercentage = 100 * (this.dashboardData.surveysCompleted / this.dashboardData.totalSurveys)
  }


}
