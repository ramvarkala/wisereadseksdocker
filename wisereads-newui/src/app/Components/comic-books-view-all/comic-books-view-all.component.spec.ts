import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicBooksViewAllComponent } from './comic-books-view-all.component';

describe('ComicBooksViewAllComponent', () => {
  let component: ComicBooksViewAllComponent;
  let fixture: ComponentFixture<ComicBooksViewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicBooksViewAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicBooksViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
