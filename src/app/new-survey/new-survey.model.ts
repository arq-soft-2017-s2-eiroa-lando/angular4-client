export class NewSurvey{

  period : string;
  comment: string;
  subjects : Subject[] = [];
  showClassForm : boolean;
  emails : string;

  isValid() : boolean{
    return (this.period != null && this.period && this.subjects.length > 0
      && this.emails && this.emails.length > 0);
  }
}

export class Subject{
  name: string = "";
  classes : Class[] = [];
  options : string[] = [];

  isValid() : boolean{
    return (this.name != null && this.name && this.classes.length > 0
      && this.options.length > 0);
  }
}

export class Class{
  name: string;
  teachers: string;
  schedules : string[] = [];
  showScheduleForm : boolean;
  size: number;

  isValid() : boolean {
    return (this.name != null && this.name && this.teachers != null
      && this.teachers && this.schedules.length > 0 && this.size && this.size > 0);
  }
}
