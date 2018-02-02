import {Component, OnInit} from '@angular/core';
import {SurveyService} from '../service/surveys.service';
import {LocalDataSource} from 'ng2-smart-table';
import {NewSurvey} from '../new-survey/new-survey.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData: any;
  pieChartLabels: string[];
  pieChartData: number[];
  pieChartType: string;
  completionPercentage: number;
  canDraw = false;

  surveys: any[];

  settings = {
    columns: {
      name: {
        title: 'Comision',
        editable: false
      },
      subject: {
        title: 'Materia',
        editable: false
      },
      enrolled: {
        title: 'Inscriptos',
        filter: false,
        editable: false
      },
      size: {
        title: 'Cupo',
        filter: false,
        editable: false
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    }
  };

  data: LocalDataSource;

  ngOnInit(): void {
    this.surveyService.getSurveyStatistics().then(s => this.surveys = s);
  }

  constructor(private surveyService: SurveyService, private router: Router) {
    this.data = new LocalDataSource();
  }

  loadStatistics(statistics): void {
    this.data.load(statistics.classes);

    this.dashboardData = statistics;
    this.pieChartLabels = ['No completadas', 'Completadas'];
    this.pieChartData = [this.dashboardData.totalSurveys - this.dashboardData.surveysCompleted, this.dashboardData.surveysCompleted];
    this.pieChartType = "pie";
    this.dashboardData.classes.sort((s1, s2) => s1.enrolled - s2.enrolled);
    this.completionPercentage = 100 * (this.dashboardData.surveysCompleted / this.dashboardData.totalSurveys)

    this.canDraw = true;
  }

  canDrawChart(): boolean {
    return this.canDraw;
  }

  viewSurveys(): void {
    this.router.navigate(['survey-ids/'+this.dashboardData.surveyID])
  }

}
