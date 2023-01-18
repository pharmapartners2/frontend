import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBpcodeComponent } from './search-bpcode.component';

describe('SearchBpcodeComponent', () => {
  let component: SearchBpcodeComponent;
  let fixture: ComponentFixture<SearchBpcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBpcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBpcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
