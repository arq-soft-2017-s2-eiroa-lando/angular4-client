import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewSurvey, Subject, Class } from './new-survey.model';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {
  newSurvey : NewSurvey;
  newSubject : Subject;
  newClass : Class;
  newSchedule : string;

  constructor() {
    this.newSurvey = new NewSurvey();
    this.newSubject = new Subject();
    this.newClass = new Class();
  }

  ngOnInit() {
  }

  submitSurvey(): void {
    console.log(this.newSurvey.period + " " + this.newSurvey.comment );
  }

  addClass(): void{
    this.newSubject.classes.push(this.newClass);
    this.newSurvey.showClassForm = false;
    this.newClass = new Class();
    console.log(this.newSubject.classes)
  }

  addSubject(): void{
    this.newSurvey.subjects.push(this.newSubject);
    this.newSubject = new Subject();
    console.log(this.newSurvey.subjects);
  }

  addSchedule(): void{
    this.newClass.schedules.push(this.newSchedule);
    this.newSchedule = "";
    this.newClass.showScheduleForm = false;
    console.log(this.newClass.schedules)
  }

}
