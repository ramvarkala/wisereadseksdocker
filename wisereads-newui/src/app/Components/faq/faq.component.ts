import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  searchTerm: FormControl = new FormControl();
  myBooks = [] as any;
  constructor(private searchService: SearchService,private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('Token') != null && localStorage.getItem('currentUser') != null) {
      this.router.navigate(['']);

    } else {
      this.router.navigate(['/app-faq']);
    }
    localStorage.removeItem("url");
    this.search();
  }

  search(){
    this.searchTerm.valueChanges.subscribe(
      term => {
        if (term && term !== '' && term.length >= 3) {
          this.searchService.search(term).subscribe(
            (data: any) => {
              this.myBooks = data.resultsMap.books as any[];
              // console.log(data[0].BookName);
              console.log("myBooks",this.myBooks)
          });
        } else {
          this.myBooks = [];
        }

    });
  }

}
