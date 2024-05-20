import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceOptionsComponent } from './multiple-choice-options.component';

describe('MultipleChoiceOptionsComponent', () => {
  let component: MultipleChoiceOptionsComponent;
  let fixture: ComponentFixture<MultipleChoiceOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultipleChoiceOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleChoiceOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
