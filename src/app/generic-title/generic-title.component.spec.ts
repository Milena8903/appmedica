import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTitleComponent } from './generic-title.component';

describe('GenericTitleComponent', () => {
  let component: GenericTitleComponent;
  let fixture: ComponentFixture<GenericTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
