import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteBriefjeComponent } from './visite-briefje.component';

describe('VisiteBriefjeComponent', () => {
  let component: VisiteBriefjeComponent;
  let fixture: ComponentFixture<VisiteBriefjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteBriefjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteBriefjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
