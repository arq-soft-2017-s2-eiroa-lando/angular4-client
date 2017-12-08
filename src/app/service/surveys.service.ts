import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SurveyService{

  private headers = new Headers({'Content-Type': 'application/json'});
  private baseUrl = "http://localhost:8080/";
  private surveyStatistics = {
    title : "1er cuatrimestre 2018",
    totalSurveys : "734",
    surveysCompleted : "482",
    classes : [
      {
        subject : "Organizacion de computadoras",
        name: "C1",
        enrolled : "45",
        schedule: [
            "Martes 20:00 a 22:00 hs",
            "Jueves 20:00 a 22:00 hs",
            "Viernes 09:00 a 12:00 hs"
        ],
        size: 60
      },
      {
        subject : "Organizacion de computadoras",
        name: "C2",
        enrolled : "4",
        schedule: [
            "Martes 08:00 a 10:00 hs",
            "Jueves 08:00 a 10:00 hs"
        ],
        size: 30
      },
      {
        subject : "Introduccion a la programacion",
        name: "C1",
        enrolled : "1",
        schedule: [
            "Martes 20:00 a 22:00 hs",
            "Jueves 20:00 a 22:00 hs"
        ],
        size: 15
      },
      {
        subject : "Introduccion a la programacion",
        name: "C2",
        enrolled : "90",
        schedule: [
            "Martes 20:00 a 22:00 hs",
            "Jueves 20:00 a 22:00 hs"
        ],
        size: 100
      },
      {
        subject : "Introduccion a la programacion",
        name: "C3",
        enrolled : "55",
        schedule: [
            "Martes 20:00 a 22:00 hs",
            "Jueves 20:00 a 22:00 hs"
        ],
        size: 50
      },
      {
        subject : "Objetos 1",
        name: "C1",
        enrolled : "10",
        schedule: [
            "Martes 20:00 a 22:00 hs",
            "Jueves 20:00 a 22:00 hs"
        ],
        size: 40
      },
      {
        subject : "Objetos 1",
        name: "C2",
        enrolled : "100",
        schedule: [
            "Martes 20:00 a 22:00 hs",
            "Jueves 20:00 a 22:00 hs"
        ],
        size: 60
      },
      {
        subject : "Objetos 1",
        name: "C3",
        enrolled : "0",
        schedule: [
            "Martes 20:00 a 22:00 hs",
            "Jueves 20:00 a 22:00 hs"
        ],
        size: 60
      }

    ]

  }


  constructor(private http: Http) { }

  getSurveyStatistics() : any{
    return this.surveyStatistics;
  }

  saveSurvey(survey): Promise<void>{
    return this.http.post(this.baseUrl + "api/survey/new-survey", JSON.stringify(survey), {headers: this.headers})
      .toPromise().then(() => null )
      .catch(this.handleError);
  }

  saveAnswer(hash, answers) : Promise<void>{
    return this.http.post(this.baseUrl + "api/survey/answer/" + hash, answers, {headers: this.headers})
      .toPromise().then(() => null )
      .catch(this.handleError);
  }

  getSurvey(surveyHash): Promise<any>{
    return this.http.get(this.baseUrl + "api/survey/student-survey/" + surveyHash)
               .toPromise()
               .then(response => response.json() )
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
