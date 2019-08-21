import { Component, OnInit } from "@angular/core";
import { NguCarouselConfig } from "@ngu/carousel";
import { BooksService } from 'src/app/services/books.service';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  ELEMENT_DATA = [];
  comicsRec = [];
  ficRec = [];
  storyRec = [];
  searchTerm: FormControl = new FormControl();
  myBooks = [] as any;

  public carouselTile: NguCarouselConfig = {
    easing: "cubic-bezier(0, 0, 0.2, 1)",
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: { timing: 3000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2
    // grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    // slide: 1,
    // speed: 250,
    // point: {
    //   visible: true
    // },
    // load: 2,
    // loop: true,
    // velocity: 0,
    // touch: true,
  };

  carouselItems = [
    {
      title: "Save you shelf space with WiseReads book rentals ",
      url: "../../assets/images/slider3.jpg"
    },
    {
      title: "Immersing yourself in the book world",

      url: "../../assets/images/slider4.jpg"
    },
    {
      title: "Give your childrens a gift of imagination",
      url: "../../assets/images/slider5.jpg"
    }
  ];

  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 5,
    // "arrows":true,
    // prevArrow:
    //   "<i class='material-icons nav-btn prev-slide'>arrow_back_ios</i>",
    // nextArrow:
    //   "<i class='material-icons nav-btn next-slide-home'>arrow_forward_ios</i>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    dots: false,
    infinite: false,
    draggable: false,
    focusOnSelect: true,
    swipe: true,
    touchMove: true,
    zIndex: 1000,
    adaptiveHeight: true,
    lazyLoad: "ondemand",
    // autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true
  };

  constructor(private bookservice: BooksService,
    private searchService: SearchService,
    private router: Router) {

    
  }

  ngOnInit() {
    if (localStorage.getItem('Token') != null && localStorage.getItem('currentUser') != null) {
      this.router.navigate(['']);

    } else {
      this.router.navigate(['/home']);
    } 
    localStorage.setItem("isHome","true");
    localStorage.removeItem("url");
    this.getbooks();
    // this.bookList();
    // localStorage.setItem("isHome","true");

this.search();


  }

  getbooks() {
    this.bookservice.getbooks().subscribe((data: any) => {
      this.ELEMENT_DATA = data.resultsMap.books;
      for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
        const element = this.ELEMENT_DATA[i];
        if (element.genreId == 2) {
          this.comicsRec.push(element);
        } else if (element.genreId == 3) {
          this.ficRec.push(element);
        } else if (element.genreId == 1) {
          this.storyRec.push(element);
        }
      }
    });
  }

  // bookList(){
  //   this.bookservice.getProduct(1).subscribe((data: any) => {
  //     console.log(data);
  //     // this.product = data.resultsMap.book;
  //   });
  // }

  checkC() {
    localStorage.setItem("cobC", "true");
    localStorage.setItem("isHome","true");

  }

  slickInit(e) {
    // console.log("slick initialized");
  }

  breakpoint(e) {
    // console.log("breakpoint");
  }

  afterChange(e) {
    // console.log("afterChange");
  }

  beforeChange(e) {
    // console.log("beforeChange");
  }

  onKeyUp(boxInput: HTMLInputElement) {
    const length = boxInput.value.length ;
    console.log(length);
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
