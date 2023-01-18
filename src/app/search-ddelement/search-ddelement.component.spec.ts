import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDdelementComponent } from './search-ddelement.component';

describe('SearchDdelementComponent', () => {
  let component: SearchDdelementComponent;
  let fixture: ComponentFixture<SearchDdelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDdelementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDdelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
