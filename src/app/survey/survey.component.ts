import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../service/surveys.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  survey: any;
  answers: Answer[] = []; //Mantiene las respuestas para cada materia
  canSubmit : boolean;
  surveyHash : string;

  constructor(
    private surveyService: SurveyService,
    private route: ActivatedRoute
  ){ }

  ngOnInit(): void {
    this.surveyHash = this.route.snapshot.paramMap.get('id');
    this.survey = this.surveyService.getSurvey(this.surveyHash)
      .then(s => this.initialize(s) );
  }

  initialize(survey) : void{
    this.survey = survey;
    //Se inicializan las respuestas para cada materia, que de momento son vacias.
    this.survey.subjects.map(s => this.answers.push(new Answer(s.id, null)));
    this.canSubmit = this.isFormValid();
  }

  onChange(answer, subject) : void {
    this.answers.filter(a => a.id == subject.id )[0].option = answer;
    this.canSubmit = this.isFormValid();
  }

  submitSurvey(): void {
    console.log(this.answers)
    if(this.isFormValid()){
      this.surveyService.saveAnswer(this.surveyHash, this.answers).then(
        () => console.log("Answer submitted")
      )
    }
  }

  private isFormValid(): boolean {
    for(let answer of this.answers ) {
      if(answer.option === "" || answer.option === "Seleccionar opción"){
        return false;
      }
    }
    return true;
  }
}

class Answer{
    constructor(public id, public option){  }
}
