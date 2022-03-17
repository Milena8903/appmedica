import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintitlegenericComponent } from './logintitlegeneric.component';

describe('LogintitlegenericComponent', () => {
  let component: LogintitlegenericComponent;
  let fixture: ComponentFixture<LogintitlegenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogintitlegenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogintitlegenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
