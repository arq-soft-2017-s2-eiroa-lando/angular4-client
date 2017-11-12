import { Component, OnInit } from '@angular/core';
import { SurveyService } from './service/surveys.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  survey: any;
  answers: Map<string,string> = new Map<string, string>(); //Mantiene las respuestas para cada materia
  canSubmit : boolean;

  constructor(
    private surveyService: SurveyService,
  ){ }

  ngOnInit(): void {
    // this.surveyService.getSurvey().then(s=> this.survey = s);
    this.survey = this.surveyService.getSurvey();

    //Se inicializan las respuestas para cada materia, que de momento son vacias.
    this.survey.subjects.map(s => this.answers.set(s.name , "" ));
  }

  onChange(answer, subject) : void {
    this.answers.set(subject.name, answer);
    this.canSubmit = this.isFormValid();
  }

  submitSurvey(): void {
    if(this.isFormValid()){
      console.log("submiting");
    }
  }

  //Devuelve true si todas las materias del formulario fueron respondidas.
  private isFormValid(): boolean {
    for(let subject of Array.from( this.answers.keys()) ) {
      var answer = this.answers.get(subject);
      if(answer === "" || answer === "Seleccionar opción"){
        return false;
      }
    }
    return true;
  }

}
