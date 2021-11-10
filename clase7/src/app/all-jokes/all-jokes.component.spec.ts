import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJokesComponent } from './all-jokes.component';

describe('AllJokesComponent', () => {
  let component: AllJokesComponent;
  let fixture: ComponentFixture<AllJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
