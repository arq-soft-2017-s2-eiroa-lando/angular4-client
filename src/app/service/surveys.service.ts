import { Injectable, Inject, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SurveyService{

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getSurveyStatistics() : any{
    return this.http.get(this.baseUrl() + "api/survey/statistics")
      .toPromise()
      .then(response => response.json() )
      .catch( this.handleError );
  }

  baseUrl(): string {
    console.log(document.location.href.indexOf("localhost"))
    // if( document.location.href.indexOf("localhost") == -1 ){
      return "https://52.11.222.208:8090/";
    // }
    // return "http://localhost:8080/";
  }

  saveSurvey(survey): Promise<void>{
    console.log(this.baseUrl())
    return this.http.post(this.baseUrl() + "api/survey/new-survey", JSON.stringify(survey), {headers: this.headers})
      .toPromise().then(() => null )
      .catch(this.handleError);
  }

  saveAnswer(hash, answers) : Promise<void>{
    return this.http.post(this.baseUrl() + "api/survey/answer/" + hash, answers, {headers: this.headers})
      .toPromise().then(() => null )
      .catch(this.handleError);
  }

  getSurvey(surveyHash): Promise<any>{
    return this.http.get(this.baseUrl() + "api/survey/student-survey/" + surveyHash)
               .toPromise()
               .then(response => response.json() )
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
