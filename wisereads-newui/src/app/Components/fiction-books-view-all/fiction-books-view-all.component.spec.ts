import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FictionBooksViewAllComponent } from './fiction-books-view-all.component';

describe('FictionBooksViewAllComponent', () => {
  let component: FictionBooksViewAllComponent;
  let fixture: ComponentFixture<FictionBooksViewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FictionBooksViewAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FictionBooksViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
