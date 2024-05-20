import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillFormPageComponent } from './fill-form-page.component';

describe('FillFormPageComponent', () => {
  let component: FillFormPageComponent;
  let fixture: ComponentFixture<FillFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FillFormPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FillFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
