import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicatieToevoegenComponent } from './medicatie-toevoegen.component';

describe('MedicatieToevoegenComponent', () => {
  let component: MedicatieToevoegenComponent;
  let fixture: ComponentFixture<MedicatieToevoegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicatieToevoegenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicatieToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
