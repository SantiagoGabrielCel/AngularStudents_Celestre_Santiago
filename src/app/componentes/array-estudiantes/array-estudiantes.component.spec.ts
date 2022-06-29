import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayEstudiantesComponent } from './array-estudiantes.component';

describe('ArrayEstudiantesComponent', () => {
  let component: ArrayEstudiantesComponent;
  let fixture: ComponentFixture<ArrayEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayEstudiantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
