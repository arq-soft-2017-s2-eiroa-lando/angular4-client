import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SurveyService{

  private headers = new Headers({'Content-Type': 'application/json'});
  private survey = {
    title: "Encuesta de intencion de inscripcion",
    period: "1er cuatrimestre 2018",
    comment: "Esta encuesta tiene como objetivo realizar...",
    subjects : [
        {
          name: "Introduccion a la programacion",
          classes : [
            {
              name : "Comision 1",
              schedule : [
                {
                  day: "Lunes",
                  time: "18:00 - 22:00"
                },
                {
                  day: "Martes",
                  time: "18:00 - 21:00"
                }
              ],
              teachers: "Fidel, Eduardo"
            },
            {
              name : "Comision 2",
              schedule : [
                {
                  day: "Lunes",
                  time: "9:00 - 13:00"
                },
                {
                  day: "Jueves",
                  time: "10:00 - 13:00"
                }
              ],
              teachers: "Fidel, Eduardo"
            }
          ],
          options : [ "Ya cursé", "Cursaria en C1", "Cursaria en C2", "No voy a cursar"]
        },
        {
          name: "Arquitectura de software 1",
          classes : [
            {
              name : "Comision 1",
              schedule : [
                {
                  day: "Lunes",
                  time: "16:00 - 22:00"
                }
              ],
              teachers: "Leonardo Volinier, Claudio Fernandez"
            }
          ],
          options : [ "Ya cursé", "Cursaria en C1", "No voy a cursar"]
        },
        {
          name: "Organizacion de computadoras",
          classes : [
            {
              name : "Comision 1",
              schedule : [
                {
                  day: "Lunes",
                  time: "20:00 - 22:00"
                },
                {
                  day: "Martes",
                  time: "20:00 - 22:00"
                },
                {
                  day: "Jueves",
                  time: "18:00 - 21:00"
                }
              ],
              teachers: "Gustavo Acher"
            },
            {
              name : "Comision 2",
              schedule : [
                {
                  day: "Lunes",
                  time: "08:00 - 10:00"
                },
                {
                  day: "Martes",
                  time: "08:00 - 11:00"
                },
                {
                  day: "Viernes",
                  time: "10:00 - 12:00"
                }
              ],
              teachers: "Gustavo Acher"
            },
            {
              name : "Comision 3",
              schedule : [
                {
                  day: "Lunes",
                  time: "20:00 - 22:00"
                },
                {
                  day: "Martes",
                  time: "18:00 - 22:00"
                }
              ],
              teachers: "Gustavo Acher"
            }
          ],
          options : [ "Ya cursé", "Cursaria en C1", "Cursaria en C2", "Cursaria en C3", "No voy a cursar"]
        },
      {
        name: "Programación con Objetos 1",
        classes : [
          {
            name : "Comision 1",
            schedule : [
              {
                day: "Lunes",
                time: "18:00 - 22:00"
              },
              {
                day: "Miercoles",
                time: "18:00 - 22:00"
              }
            ],
            teachers: "Juan Perez"
          },
          {
            name : "Comision 2",
            schedule : [
              {
                day: "Lunes",
                time: "9:00 - 13:00"
              },
              {
                day: "Miercoles",
                time: "09:00 - 13:00"
              }
            ],
            teachers: "Pablo Sanchez"
          },
          {
            name : "Comision 3",
            schedule : [
              {
                day: "Martes",
                time: "10:00 - 14:00"
              },
              {
                day: "Sabado",
                time: "10:00 - 14:00"
              }
            ],
            teachers: "Jose Alvarez"
          }
        ],
        options : [ "Ya cursé", "Cursaria en C1", "Cursaria en C2", "Cursaria en C3", "No voy a cursar"]
      }
    ]
  };

  constructor(private http: Http) { }

  getSurvey(): any {
    return this.survey;
  }

  // getSurvey(): Promise<any>{
  //   return this.http.get("api/students/1")
  //              .toPromise()
  //              .then(response => response.json() )
  //              .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
