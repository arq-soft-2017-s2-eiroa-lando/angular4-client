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
  // mostEnrolledClasses : any[] = [];
  // leastEnrolledClasses : any[] = [];

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
    this.pieChartLabels = ['Total de almunos', 'Encuestas completadas'];
    this.pieChartData = [this.dashboardData.totalSurveys, this.dashboardData.surveysCompleted];
    this.pieChartType = "pie";
    this.dashboardData.classes.sort( (s1,s2) => s1.enrolled - s2.enrolled );

    // var classesLength = this.dashboardData.classes.length
    //
    // //Extraer las 5 comisiones con mas cantidad de inscriptos
    // var sliceMax = classes >= 5 ? 5 : classes
    // this.leastEnrolledClasses = this.dashboardData.classes.slice(0,sliceMax);
    //
    // //Extraer las 5 comisiones con menos cantidad de inscriptos
    // var sliceMin = classes >= 5 ? classes - 5 : 0
    // this.mostEnrolledClasses = this.dashboardData.classes.slice(sliceMin, classes);

    this.configuration = ConfigService.config;

    this.data = this.dashboardData.classes;
  }


}
