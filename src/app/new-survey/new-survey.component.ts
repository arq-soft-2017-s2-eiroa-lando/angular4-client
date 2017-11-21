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
  canSubmit : boolean;

  constructor() {
    this.newSurvey = new NewSurvey();
    this.newSubject = new Subject();
    this.newClass = new Class();
  }

  ngOnInit() {
  }

  isValid() : boolean{
    return this.newSurvey.isValid()
  }

  submitSurvey(): void {
      console.log("Submiting")
  }

  addClass(): void{
    if(this.newClass.isValid()){
      this.newSubject.classes.push(this.newClass);
      this.newSurvey.showClassForm = false;
      this.newClass = new Class();
    }
  }

  addSubject(): void{
    if(this.newSubject.isValid()){
      this.newSurvey.subjects.push(this.newSubject);
      this.newSubject = new Subject();
    }
  }

  addSchedule(): void{
    if(this.newSchedule){
      this.newClass.schedules.push(this.newSchedule);
      this.newSchedule = "";
      this.newClass.showScheduleForm = false;
    }
  }

}
