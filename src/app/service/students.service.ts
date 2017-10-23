import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StudentsService{

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getStudent(): Promise<any>{
    return this.http.get("http://localhost:8080/students/1")
               .toPromise()
               .then(response => response.json() )
               .catch(this.handleError);
  }

  subscribe(student, subject): Promise<any>{
    var data = {
      "id" : 1,
      "name" : subject.name
    };
    return this.http.post("http://localhost:8080/students/subscribe/1", data, {headers: this.headers})
      .toPromise()
      .then()
      .catch(this.handleError)
  }

  unsubscribe(student, subject): Promise<any>{
    var data = {
      "id" : 1,
      "name" : subject.name
    };
    return this.http.post("http://localhost:8080/students/unsubscribe/1", data, {headers: this.headers})
      .toPromise()
      .then()
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
