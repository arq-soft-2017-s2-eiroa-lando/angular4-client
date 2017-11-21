export class NewSurvey{

  period : string;
  comment: string;
  subjects : Subject[] = [];
  showClassForm : boolean

}

export class Subject{
  name: string;
  classes : Class[] = [];
}

export class Class{
  name: string;
  teachers: string;
  schedules : string[] = [];
  showScheduleForm : boolean
}
