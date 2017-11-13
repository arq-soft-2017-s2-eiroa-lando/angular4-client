export class NewSurvey{

  period : string;
  comment: string;
  subjects : [Subject];

}

export class Subject{

  name: string;
  classes : [Class];

}

export class Class{

  name: string;
  teachers: string;
  schedule : string;
  
}
