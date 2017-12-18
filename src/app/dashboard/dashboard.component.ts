import {Component, OnInit} from '@angular/core';
import {SurveyService} from '../service/surveys.service';
import {LocalDataSource} from 'ng2-smart-table';
import {NewSurvey} from '../new-survey/new-survey.model';

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

  surveys: NewSurvey[];

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
    /*this.surveyService.getSurveys().subscribe(
      maybeSurveys => this.replaceSurveys(maybeSurveys)
    )*/
    this.surveyService.getSurveyStatistics().then(r => this.initializeDashboard(r));
  }

  replaceSurveys(items: NewSurvey[]): void {
    this.surveys = items;
    console.log(items);
  }

  constructor(private surveyService: SurveyService) {
    this.data = new LocalDataSource();
  }

  initializeDashboard(response): void {
    if (response !== null) {

      this.data.load(response.classes);

      this.dashboardData = response;
      this.pieChartLabels = ['No completadas', 'Completadas'];
      this.pieChartData = [this.dashboardData.totalSurveys - this.dashboardData.surveysCompleted, this.dashboardData.surveysCompleted];
      this.pieChartType = "pie";
      this.dashboardData.classes.sort((s1, s2) => s1.enrolled - s2.enrolled);
      this.completionPercentage = 100 * (this.dashboardData.surveysCompleted / this.dashboardData.totalSurveys)

      this.canDraw = true;
    }
  }

  canDrawChart(): boolean {
    return this.canDraw;
  }

}
