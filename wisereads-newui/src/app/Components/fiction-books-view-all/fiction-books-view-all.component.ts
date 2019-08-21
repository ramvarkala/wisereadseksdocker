import { Component, OnInit } from "@angular/core";
import { BooksService } from "src/app/services/books.service";

@Component({
  selector: "app-fiction-books-view-all",
  templateUrl: "./fiction-books-view-all.component.html",
  styleUrls: ["./fiction-books-view-all.component.scss"]
})
export class FictionBooksViewAllComponent implements OnInit {
  ELEMENT_DATA = [];
  ficRec = [];

  constructor(private bookservice: BooksService) {}

  ngOnInit() {
    this.loadFictionBooks();
  }
  loadFictionBooks() {
    this.bookservice.getbooks().subscribe((data: any) => {
      this.ELEMENT_DATA = data.resultsMap.books;
      for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
        const element = this.ELEMENT_DATA[i];
        if (element.genreId == 3) {
          this.ficRec.push(element);
        }
      }
    });
  }
  checkC() {
    localStorage.setItem("cobC", "true");
    localStorage.setItem("isHome","false");
  }
}
