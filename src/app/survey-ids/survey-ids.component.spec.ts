import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyIdsComponent } from './survey-ids.component';

describe('SurveyIdsComponent', () => {
  let component: SurveyIdsComponent;
  let fixture: ComponentFixture<SurveyIdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyIdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyIdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
