import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListCardsComponent } from './book-list-cards.component';

describe('BookListCardsComponent', () => {
  let component: BookListCardsComponent;
  let fixture: ComponentFixture<BookListCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
