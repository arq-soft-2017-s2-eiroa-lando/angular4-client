import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewSurvey } from './new-survey.model';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {
  newSurvey : NewSurvey;

  constructor() { this.newSurvey = new NewSurvey(); }

  ngOnInit() {
  }

  submitSurvey(): void {
    console.log(this.newSurvey.period + " " + this.newSurvey.comment );
  }

  addCourse(): void{

  }

  addSubject(): void{
    
  }

}
