import { Component, OnInit } from "@angular/core";
import { BooksService } from "src/app/services/books.service";

@Component({
  selector: "app-story-books-view-all",
  templateUrl: "./story-books-view-all.component.html",
  styleUrls: ["./story-books-view-all.component.scss"]
})
export class StoryBooksViewAllComponent implements OnInit {
  ELEMENT_DATA = [];
  storyRec = [];
  isHome: string;

  constructor(private bookservice: BooksService) {}

  ngOnInit() {
    this.loadStoryBooks();
  }

  loadStoryBooks() {
    this.bookservice.getbooks().subscribe((data: any) => {
      this.ELEMENT_DATA = data.resultsMap.books;
      for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
        const element = this.ELEMENT_DATA[i];
        if (element.genreId == 1) {
          this.storyRec.push(element);
        }
      }
    });
  }
  checkC() {
    localStorage.setItem("cobC", "true");
    // this.isHome=localStorage.getItem("isHome");
    localStorage.setItem("isHome","false");

  }
}
