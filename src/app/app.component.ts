import { Component, OnInit } from '@angular/core';
import { StudentsService } from './service/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  student: any;

  constructor(
    private studentsService: StudentsService
  ){ }

  ngOnInit(): void {
    this.studentsService.getStudent().then(s=> this.student = s);
  }

  subscribe(subject){
    this.studentsService.subscribe(this.student, subject).then( () => subject.subscribed = true);
  }

  unsubscribe(subject){
    this.studentsService.unsubscribe(this.student, subject).then( () => subject.subscribed = false);
  }

}
