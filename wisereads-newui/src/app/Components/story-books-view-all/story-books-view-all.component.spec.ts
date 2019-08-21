import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBooksViewAllComponent } from './story-books-view-all.component';

describe('StoryBooksViewAllComponent', () => {
  let component: StoryBooksViewAllComponent;
  let fixture: ComponentFixture<StoryBooksViewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryBooksViewAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryBooksViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
