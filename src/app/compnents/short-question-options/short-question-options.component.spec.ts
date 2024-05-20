import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortQuestionOptionsComponent } from './short-question-options.component';

describe('ShortQuestionOptionsComponent', () => {
  let component: ShortQuestionOptionsComponent;
  let fixture: ComponentFixture<ShortQuestionOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShortQuestionOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortQuestionOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
