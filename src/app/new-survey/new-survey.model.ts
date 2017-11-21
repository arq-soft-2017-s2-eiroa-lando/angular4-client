export class NewSurvey{

  period : string;
  comment: string;
  subjects : Subject[] = [];
  showClassForm : boolean

  isValid() : boolean{
    return (this.period != null && this.period && this.subjects.length > 0);
  }
}

export class Subject{
  name: string = "";
  classes : Class[] = [];

  isValid() : boolean{
    return (this.name != null && this.name && this.classes.length > 0);
  }
}

export class Class{
  name: string;
  teachers: string;
  schedules : string[] = [];
  showScheduleForm : boolean

  isValid() : boolean {
    return (this.name != null && this.name && this.teachers != null
      && this.teachers && this.schedules.length > 0);
  }
}
