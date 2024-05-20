import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxOptionsComponent } from './checkbox-options.component';

describe('CheckboxOptionsComponent', () => {
  let component: CheckboxOptionsComponent;
  let fixture: ComponentFixture<CheckboxOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
