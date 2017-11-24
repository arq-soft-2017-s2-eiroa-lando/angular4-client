import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('closeModalBtn') closeModalBtn:ElementRef;
  @ViewChild('editSubjectBtn') editSubjectBtn:ElementRef;

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

  isNewSubjectValid() : boolean{
    return this.newSubject.isValid()
  }

  isNewClassValid() : boolean{
    return this.newClass.isValid()
  }

  isNewScheduleValid() : boolean{
    return this.newSchedule != null && this.newSchedule !== ""
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

  removeClass(aClass) : void{
    this.newSubject.classes = this.newSubject.classes.filter(c => c != aClass)
  }

  editClass(aClass) : void{
    this.newSurvey.showClassForm = true
    this.newClass = aClass
    this.removeClass(aClass)
  }

  removeSchedule(schedule) : void{
    this.newClass.schedules = this.newClass.schedules.filter(s => s != schedule)
  }

  editSchedule(schedule) : void{
    this.newClass.showScheduleForm = true
    this.newSchedule = schedule
    this.removeSchedule(schedule)
  }

  addSchedule(): void{
    if(this.newSchedule){
      this.newClass.schedules.push(this.newSchedule);
      this.newSchedule = "";
      this.newClass.showScheduleForm = false;
    }
  }

  addSubject(): void{
    if(this.newSubject.isValid()){
      this.newSurvey.subjects.push(this.newSubject);
      this.newSubject = new Subject();
      this.newSurvey.showClassForm = false
    }
    this.closeModalBtn.nativeElement.click(); //Hack para cerrar el modal programaticamente
  }

  removeSubject(aSubject) : void{
    this.newSurvey.subjects = this.newSurvey.subjects.filter(s => s != aSubject)
  }

  editSubject(aSubject) : void{
    this.removeSubject(aSubject)
    this.newSubject = aSubject
    this.editSubjectBtn.nativeElement.click(); //Abre el modal
  }


}
