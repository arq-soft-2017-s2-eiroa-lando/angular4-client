import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SurveyService{

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  // getSurvey(): Promise<any>{
  //   return this.http.get("http://localhost:8080/students/1")
  //              .toPromise()
  //              .then(response => response.json() )
  //              .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
