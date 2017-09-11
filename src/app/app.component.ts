import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  private apiUrl = 'http://localhost:8080/subjects';
  subjects: any = [];

  constructor(private http: Http) {
    this.getSubjects();
  }

  getData() {
    return this.http.get(this.apiUrl).map((res: Response) => res.json() );
  }

  getSubjects() {
    this.getData().subscribe(data => {
        console.log(data);
        this.subjects = data;
    });
  }

}
