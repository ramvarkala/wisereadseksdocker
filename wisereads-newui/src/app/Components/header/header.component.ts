import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { SearchService } from "src/app/services/search.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  searchTerm: FormControl = new FormControl();
  myBooks = [] as any;
  constructor(private searchService: SearchService,private router: Router,) {}

  ngOnInit() {
    localStorage.removeItem("url");
    this.search();
  }

  search() {
    this.searchTerm.valueChanges.subscribe(term => {
      if (term && term !== "" && term.length >= 3) {
        this.searchService.search(term).subscribe((data: any) => {
          this.myBooks = data.resultsMap.books as any[];
        });
      } else {
        this.myBooks = [];
      }
    });
  }
  reload(bookId){
    // location.assign(`/book-detail/${bookId}`);
    let inBookDetailC=localStorage.getItem('inBookDetail');
    if(inBookDetailC=='true')
    location.assign(`/book-detail/${bookId}`);
    else 
    this.router.navigate([`/book-detail/${bookId}`]);
  }
}
