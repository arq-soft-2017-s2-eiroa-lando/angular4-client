import { Component, OnInit } from '@angular/core';
import {SurveyService} from '../service/surveys.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-survey-ids',
  templateUrl: './survey-ids.component.html',
  styleUrls: ['./survey-ids.component.css']
})
export class SurveyIdsComponent implements OnInit {

  surveyID: string
  data: any

  constructor(private surveyService: SurveyService,
              private route: ActivatedRoute,
              private router: Router
             ) { }

  ngOnInit() {
    this.surveyID = this.route.snapshot.paramMap.get('surveyid');
    this.surveyService.getSurveyIDS(this.surveyID).then(s => this.data = s );
  }

}
