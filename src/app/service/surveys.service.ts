import { Injectable, Inject, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";
import {NewSurvey} from "../new-survey/new-survey.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SurveyService{

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private httpClient: HttpClient) { }

  getSurveyStatistics() : any{
    return this.http.get(this.baseUrl() + "api/survey/statistics")
      .toPromise()
      .then(response => {
          try{
            return response.json()
          }catch (e){
            return null;
          }
        } )
      .catch( this.handleError );
  }

  baseUrl(): string {
    // if( document.location.href.indexOf("localhost") === -1 ){
      return "https://52.11.222.208:8443/";
   // console.log(document.location.href.indexOf("localhost"))
    // if( document.location.href.indexOf("localhost") == -1 ){
     // return "http://localhost:8080/";
    // }
    // return "https://localhost:8443/";
  }

  saveSurvey(survey): Promise<void>{
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


  getSurveys(): Observable<NewSurvey[]> {
    return this.httpClient.get<NewSurvey[]>(this.baseUrl() + 'api/survey/all');
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
