import { Component, OnInit } from "@angular/core";
import { BooksService } from "src/app/services/books.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-comic-books-view-all",
  templateUrl: "./comic-books-view-all.component.html",
  styleUrls: ["./comic-books-view-all.component.scss"]
})
export class ComicBooksViewAllComponent implements OnInit {
  ELEMENT_DATA = [];
  comicsRec = [];
  constructor(private bookservice: BooksService,private router: Router) {}

  ngOnInit() {
    this.loadComicBooks();
  }
  loadComicBooks() {
    this.bookservice.getbooks().subscribe((data: any) => {
      // console.log(data);
      this.ELEMENT_DATA = data.resultsMap.books;
      for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
        const element = this.ELEMENT_DATA[i];
        if (element.genreId == 2) {
          this.comicsRec.push(element);
        }
      }
    });
  }
  checkC() {
    localStorage.setItem("cobC", "true");
    localStorage.setItem("isHome","false");
  }
}
